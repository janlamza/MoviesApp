import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../_models/user-login';
import { AccountService } from '../_services/account.service';
import { RoutingService } from '../_services/routing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLogin: UserLogin = {} as any;
  constructor(private router: Router, private routingService: RoutingService, public accountService: AccountService) { }

  ngOnInit(): void {
   
  }

  redirectMeToHome(uri: string) {
    this.routingService.redirectToHome(uri);
  }

  login(uri:string) {
    this.accountService.loginUser(this.userLogin).subscribe(response => {
      this.routingService.redirectToHome(uri);
    })
    
  }

  logout(uri:string) {
    this.accountService.logout(uri);
    
  }
}
