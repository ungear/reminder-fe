import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../shared/services/jwt/jwt.service';

@Component({
  selector: 'app-auth-receiver',
  templateUrl: './auth-receiver.component.html',
  styleUrls: ['./auth-receiver.component.scss']
})
export class AuthReceiverComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private jwtService: JwtService,
  ) {}
  ngOnInit(){
    try {
      const fragment = this.activeRoute.snapshot.fragment;
      const paramsMap = fragment?.split('&')
        .reduce((acc: any, curr: string) => {
          const [currKey, currVal] = curr.split('=');
          acc[currKey] = currVal;
          return acc;
        }, {});
      const jwt = paramsMap['id_token'];
      this.jwtService.setJwt(jwt);

      this.router.navigate(['my-reminders']);

    } catch (error){
      console.log('Error when parsing url parameters');
      throw error;
    }
  }
}
