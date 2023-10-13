import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable, from, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  currentUser: User | null = null;

  constructor(private router: Router) {}

  async autoLogin(): Promise<void> {
    await Auth.currentAuthenticatedUser({
      bypassCache: true,
    }).then((user) => {
      this.currentUser = user;
      this.router.navigate(['payments']);
    });
  }

  login(username: string, password: string): Observable<any> {
    return from(Auth.signIn(username, password)).pipe(
      tap((user) => {
        if (user) {
          this.currentUser = user;
        }
      })
    );
  }

  logout(): Observable<void> {
    return from(Auth.signOut()).pipe(
      tap(() => {
        this.currentUser = null;
        this.router.navigate(['authorization/login']);
      })
    );
  }
}
