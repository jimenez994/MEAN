import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../server/models/skill';

@Component({
  selector: 'app-stack-edit',
  templateUrl: './stack-edit.component.html',
  styleUrls: ['./stack-edit.component.scss']
})
export class StackEditComponent implements OnInit {

  @Input() stack: Skill;
  @Output() updateStackEvent = new EventEmitter()
  stackEdit: Skill = new Skill();
  constructor() { }

  ngOnInit() {
    Object.assign(this.stackEdit, this.stack);
  }
  updateStack(){
    this.stackEdit.editable = false;
    this.updateStackEvent.emit(this.stackEdit);
  }
}
