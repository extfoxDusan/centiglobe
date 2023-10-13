import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  isLoading: boolean = false;

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.autoLogin();
  }

  private async autoLogin(): Promise<void> {
    this.isLoading = true;

    await this.authService.autoLogin().finally(() => (this.isLoading = false));
  }

  submit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    this.authService
      .login(this.form.value.username, this.form.value.password)
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (user) => {
          this.snackBar.open(`Welcome ${user.username}!`, 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/payments']);
        },
        error: (err) => {
          this.snackBar.open(err.message, 'Close', {
            duration: 3000,
          });
        },
      });
  }
}
