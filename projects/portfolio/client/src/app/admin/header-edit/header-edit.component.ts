import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.scss']
})
export class HeaderEditComponent implements OnInit {
  @Input() currentUser: User;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter()
  userEdit: User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.currentUser);
  }
  update(){
    this.userEdit.editable = false;
    console.log(this.userEdit);
    this.updateUserEvent.emit(this.userEdit);
  }

}
