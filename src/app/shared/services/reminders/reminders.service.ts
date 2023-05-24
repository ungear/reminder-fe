import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderDto } from 'src/app/typing/reminderDto';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  private readonly apiUrl: string = 'https://2iheo66zn9.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ReminderDto[]>(this.apiUrl + '/getAll');
  }

  create(date: Date, text: string): any {
    const payload = { triggerTime: date.getTime(), text};
    return this.http.post(this.apiUrl + '/reminder', payload);
  }
}
