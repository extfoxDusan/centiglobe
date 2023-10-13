import { Component } from '@angular/core';
import { AuthorizationService } from './modules/authorization/services/authorization.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'centiglobe';

  constructor(private authService: AuthorizationService) { }

  isLoggedIn(): boolean {
    return this.authService.currentUser !== null;
  }

  logout() {
    this.authService.logout().pipe(take(1)).subscribe();
  }

}
