import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { AuthReceiverComponent } from './auth-receiver/auth-receiver.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthReceiverComponent,
    MyRemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
