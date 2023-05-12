import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-receiver',
  templateUrl: './auth-receiver.component.html',
  styleUrls: ['./auth-receiver.component.scss']
})
export class AuthReceiverComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}
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
      console.log('JWT is ' + jwt);
    } catch (error){
      console.log('Error when parsing url parameters');
      throw error;
    }
  }
}
