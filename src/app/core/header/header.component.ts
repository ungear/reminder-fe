import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private loginUrlBase = 'https://ungear-reminder-1.auth.us-east-1.amazoncognito.com/login?client_id=1erkkvn4u0t9nfptlgg755q7p1&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=';

  constructor(@Inject(DOCUMENT) private document: Document){}
  loginUrl = '';

  ngOnInit(): void {
    const redirectUrl = this.document.location.origin + '/auth-receiver';
    this.loginUrl = this.loginUrlBase + redirectUrl;
  }
}
