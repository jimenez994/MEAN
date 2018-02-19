import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';
import { Http } from '@angular/http';
import { User } from '../../server/models/user';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  users;
  startAt = new Subject()
  endAt = new Subject()

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();


  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService
  ) { }
  
  ngOnInit() {
    this.getUsers()
  }
  
  getUsers(){
    this._userService.getUsers().subscribe(
      res => {
        // console.log(res);
        this.users = res.json();
      }
    )
  }
  search($event) {
    let q = $event.target.value;
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
 
 

}
