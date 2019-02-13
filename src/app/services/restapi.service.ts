import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  static API_URL = 'http://localhost:8001/api/v1/';
  loggedIn: BehaviorSubject<boolean>;
  user: User;

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

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // firstConnexion(user): Observable<User> {
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // const data = {
    //   _id : id
    // };

    // return this.http.update(`${RestapiService.API_URL}/user/${user._id}`);
  // }
}
