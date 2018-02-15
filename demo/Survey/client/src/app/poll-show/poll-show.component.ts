import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Poll } from '../poll';
import { OptionService } from '../option.service';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {

  poll: Poll
  currentUser: User = new User()
  poll_id:string;

  constructor(
    private _userService: UserService,
    private _pollService: PollService,
    private _optionService: OptionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this._route.params.subscribe(params => this.poll_id = params.id);
    this.getPoll();
  }
  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser == null) {
      this._router.navigateByUrl('/');
    }
  }
  getPoll(){
    this._pollService.show(this.poll_id, poll => this.poll = poll)
  }
  update(option_id: string){
    this._optionService.update(option_id, res => this.getPoll())
  }

}

