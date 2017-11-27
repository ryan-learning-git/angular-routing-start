import {EventEmitter} from '@angular/core';

export class AuthService {
  // in the real world this might fetch our state from a server etc

  loggedIn = false;

  loggedInEmitter = new EventEmitter<boolean>();


  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    console.log('User logged in.');
    this.loggedIn = true;
    this.loggedInEmitter.emit();
  }

  logout() {
    console.log('User logged out.');
    this.loggedIn = false;
    this.loggedInEmitter.emit();
  }

}
