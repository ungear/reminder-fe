import { Component, OnInit } from '@angular/core';
import { RemindersService } from '../shared/services/reminders/reminders.service';

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.scss']
})
export class MyRemindersComponent implements OnInit{
  constructor(
    private remindersApi: RemindersService,
  ){}

  ngOnInit(): void {
    this.remindersApi.getAll().subscribe();
  }
}
