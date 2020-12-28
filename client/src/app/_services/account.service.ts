import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserRergister } from '../_models/user-register';
import { UserLogin} from '../_models/user-login';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentuserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentuserSource.asObservable();
  constructor(private http: HttpClient, private routingService: RoutingService) { }

  registerUser(userRegister: UserRergister) {
    return this.http.post(this.baseUrl + "account/register", userRegister).pipe(
      map((user: User) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }


  loginUser(userLogin: UserLogin) {
   return  this.http.post(this.baseUrl + "account/login", userLogin).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }

  setCurrentUser(user: User) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentuserSource.next(user);
  }

  logout(uri:string) {
    localStorage.removeItem('user');
    this.currentuserSource.next(null);
    this.routingService.redirectToHome(uri);
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
