import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { LoginToken } from '../models/login-token';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  static API_URL = 'http://localhost:8001/api/v1/';
  loggedIn: BehaviorSubject<boolean>;
  user: User;
  loginToken: LoginToken;

  constructor(private http: HttpClient) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
    this.user = new User();
  }

  /**
   * Function that allows login by using API
   */
  login(values): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = {
        email: values.login,
        password : values.password
    };

    return this.http.post(`${RestapiService.API_URL}/auth/login`, data, {headers});
  }

  /**
   * Function that changes the state of login to true
   */
  signin() {
    this.loggedIn.next(true);
  }

  /**
   * Function that changes the state of login to false
   */
  signout() {
    this.loggedIn.next(false);
  }

  /**
   * Function that allows to know if logged in or not
   */
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  /**
   *
   */
  comparePwd(password): Observable<any> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    console.log('password', password);
    const data = {
      passwordDB : this.user.password,
      passwordConfirm : password
    };

    return this.http.post(`${RestapiService.API_URL}auth/comparePwd`, data, {headers});
  }


  /**
   *
   */
  updatePassword(password): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization': `Bearer ${this.loginToken.accessToken}`
    });

    const data = {
      newPassword : password,
      // userId : this.user._id,
      email : this.user.email
    };

    console.log('data', data);

    return this.http.patch(`${RestapiService.API_URL}user/updatePassword/${this.user._id}`, data, {headers});

  }
}
