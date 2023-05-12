import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthReceiverComponent } from './auth-receiver/auth-receiver.component';

const routes: Routes = [
  { path: 'auth-receiver', component: AuthReceiverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
