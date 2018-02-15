import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import "rxjs";
import "rxjs/add/operator/map";


@Injectable()
export class UserService {

  constructor(private _htpp: Http) { }

  create(user: User){
    return this._htpp.post("/users", user)
    .map(data => data.json()).toPromise()
  }

  destroy(user: User){
    return this._htpp.delete("/users/" + user._id).map(data => data.json()).toPromise()    
  }

  update(user: User){
    return this._htpp.put("/users/" + user._id, user).map(data => data.json()).toPromise()    
  }

  getUsers(){
    return this._htpp.get("/users").map(data => data.json()).toPromise()    
  }
  getUser(user: User){
    // return this._htpp.get("/users/" + user._id).map(data => data.json()).toPromise()    
  }

}
