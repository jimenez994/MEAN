import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  currentUser: User = null;
  constructor(
    private _http: Http
  ) { }
  getCurrentUser(){
    return this.currentUser;
  }
  create(newUser: User, )
}
