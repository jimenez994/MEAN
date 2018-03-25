import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.scss']
})
export class HeaderEditComponent implements OnInit {
  @Input() currentUser: User;
  constructor() { }

  ngOnInit() {
  }

}
