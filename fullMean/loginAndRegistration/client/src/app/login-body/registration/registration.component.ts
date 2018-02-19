import { Component, OnInit } from '@angular/core';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: User = new User();
  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }
  createUser(){
    this._userService.create(this.newUser).subscribe(
      (res) => {
        if(res.json().errors){
          console.log(res.json())
        }else{
          this._router.navigateByUrl('/dashboard')
        }
      }
    )
  }
}
