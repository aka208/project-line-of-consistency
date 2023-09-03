import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedIn = false;
  constructor() {}

  userLogin(userName: string, password: string) {
    if (userName === 'Akash') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  getUserIsLoggedIn() {
    return this.isLoggedIn;
  }
}
