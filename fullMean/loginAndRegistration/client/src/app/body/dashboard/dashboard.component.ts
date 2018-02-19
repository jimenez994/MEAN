import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser;
  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.getCurrentUser();
  }


}
