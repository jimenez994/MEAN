import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-about-me-edit',
  templateUrl: './about-me-edit.component.html',
  styleUrls: ['./about-me-edit.component.scss']
})
export class AboutMeEditComponent implements OnInit {
  @Input() currentUser: User;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter()
  userEdit: User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.currentUser);
  }
  update() {
    this.userEdit.canEditHeader = false;
    console.log(this.userEdit);
    this.updateUserEvent.emit(this.userEdit);
  }
}
