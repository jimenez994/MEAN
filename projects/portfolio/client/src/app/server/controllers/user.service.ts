import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(
    private _http: Http
  ) { }
  // get current user that is login
  getCurrentUser() {
    return this._http.get("/user").map(data => data.json()).toPromise();
  }
  // get all users
  getUsers(){
    return this._http.get("/users");
  }
  // update current user 
  update(user){
    return this._http.put("/user/update", user).map(data => data.json()).toPromise();
  }
  // create a user
  create(user) {
    return this._http.post("/user/create", user);
  }
  // login
  login(user: User, callback) {
    this._http.post("/user/login", user).subscribe(
      res => {
        callback(res);
      },
      err => {
        callback(err)
      }
    );
  }
  // logout
  logout() {
    return this._http.delete("/user/logout");
  }

}
