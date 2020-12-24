import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }


  //goes to dummy route first , then goes to home route in order to reset all components
  redirectToHome(uri: string) {
    this.router.navigateByUrl('/RandomRoute', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
