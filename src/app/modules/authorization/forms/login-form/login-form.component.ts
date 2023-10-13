import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  submit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.authService
      .login(this.form.value.username, this.form.value.password)
      .pipe(take(1))
      .subscribe({
        next: (user) => {
          this.toastrService.success(`Welcome ${user.username}!`);
          this.router.navigate(['/payments']);
        },
        error: (err) => {
          this.toastrService.error(err.message);
        },
      });
  }
}
