import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() currentUser;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(user: User){
    this.updateUserEvent.emit(user);
  }
}
