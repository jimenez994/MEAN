import { Component, OnInit } from '@angular/core';
import { NewPoll } from '../new-poll';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  
  styleUrls: ['./poll-new.component.css']
})
export class PollNewComponent implements OnInit {

  newPoll: NewPoll = new NewPoll();
  errors: string[] = []
  currentUser: User = new User();

  constructor(
    private _pollService: PollService,
    private _userService: UserService,
    private _router: Router
  ) { }
  
  ngOnInit() {
  }

  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser == null) {
      this._router.navigateByUrl('/');
    }
  }

  createPoll(){
    this.errors = [];
    if (this.newPoll.option1.option.length < 3 || this.newPoll.option2.option.length < 3 || this.newPoll.option3.option.length < 3 || this.newPoll.option4.option.length < 3 ){
      this.errors.push('the options must be at least three characters')
    }
   
    this._pollService.create(this.newPoll, (poll)=> {
      if(poll.errors){
        for (const key of Object.keys(poll.errors)){
          const error = poll.error[key];
          this.errors.push(error.message)
        }
      }else{
        this._router.navigateByUrl('/dashboard')
      }

    })
  }

}
