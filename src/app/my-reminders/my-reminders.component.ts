import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RemindersService } from '../shared/services/reminders/reminders.service';
import { ReminderDto } from '../typing/reminderDto';

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.scss']
})
export class MyRemindersComponent {
  reminders$ = this.remindersApi.getAll().pipe(
    map(reminders => {
      return reminders.map(x => {
        const date = new Date(x.triggerTime);
        return {...x, triggerDate: date}
      })
    })
  );

  constructor(
    private remindersApi: RemindersService,
  ){}
}
