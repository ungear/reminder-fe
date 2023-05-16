import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  private readonly apiUrl: string = 'https://2iheo66zn9.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) {}

  getAll(): any{
    return this.http.get(this.apiUrl + '/getAll');
  }
}
