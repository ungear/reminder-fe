import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly loginUrl = 'https://ungear-reminder-1.auth.us-east-1.amazoncognito.com/login?client_id=1erkkvn4u0t9nfptlgg755q7p1&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fd243w1yegzb8t3.cloudfront.net%2Fauth-receiver'
}
