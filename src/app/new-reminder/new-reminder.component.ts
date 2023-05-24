import { Component } from '@angular/core';
import {RemindersService} from "../shared/services/reminders/reminders.service";

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.scss']
})
export class NewReminderComponent {
  date: any;
  text = "";

  constructor(private remindersApi: RemindersService){}

  onCreateButtonClick(){
    this.remindersApi.create(this.date, this.text).subscribe();
  }
}
