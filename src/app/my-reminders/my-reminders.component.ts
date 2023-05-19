import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemindersService } from '../shared/services/reminders/reminders.service';
import { ReminderDto } from '../typing/reminderDto';

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.scss']
})
export class MyRemindersComponent {
  //reminders$: Observable<ReminderDto[]> | undefined;
  reminders$ = this.remindersApi.getAll();

  constructor(
    private remindersApi: RemindersService,
  ){}

  onNewReminderClick(){

  }
}
