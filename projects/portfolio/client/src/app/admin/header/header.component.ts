import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentUser;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(user: User ){
    this.updateUserEvent.emit(user);
  }

}
