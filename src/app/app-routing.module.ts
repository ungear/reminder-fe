import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthReceiverComponent } from './auth-receiver/auth-receiver.component';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';

const routes: Routes = [
  { path: 'auth-receiver', component: AuthReceiverComponent },
  { path: 'my-reminders', component: MyRemindersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
