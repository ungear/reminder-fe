import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly localStorageKey = 'reminder_jwt';
  constructor(@Inject(DOCUMENT) private document: Document){}

  setJwt(token: string): void{
    this.document.defaultView?.localStorage.setItem(this.localStorageKey, token);
  }

  getJwt(): string {
    let token = this.document.defaultView?.localStorage.getItem(this.localStorageKey);
    if(!token){
      console.error('No JWT discovered in local storage');
      token = '';
    }
    return token;
  }
}
