import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  fullLoader = false;
  isLoginned = false;
  constructor() { }

  isAuthenticated = () => {
    return this.isLoginned;
  }

  setAuthetication = () => {
    this.isLoginned = true;
  }
}
