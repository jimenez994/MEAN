import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-summary-edit',
  templateUrl: './summary-edit.component.html',
  styleUrls: ['./summary-edit.component.scss']
})
export class SummaryEditComponent implements OnInit {

  @Input() currentUser: User;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter()
  userEdit: User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.currentUser);
  }
  update() {
    this.userEdit.canEditSummary = false;
    console.log(this.userEdit);
    this.updateUserEvent.emit(this.userEdit);
  }

}
