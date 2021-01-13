import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserRergister } from '../../_models/user-register';
import { AccountService } from '../../_services/account.service';
import { RoutingService } from '../../_services/routing.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userSign: UserRergister = {} as any;
  constructor(private accountService: AccountService, private routingService: RoutingService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signUp(uri: string) {
    this.accountService.registerUser(this.userSign).subscribe(response => {
      this.routingService.redirectToHome(uri);
      this.toastr.success("Welcome!", "start downloading now!")
    }, error => {
        this.toastr.error("Username already taken!", "Oops !");
    })
  }
}
