import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../_services/routing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  redirectMeToHome(uri: string) {
    this.routingService.redirectToHome(uri);
  }

}
