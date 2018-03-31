import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skill } from '../../server/models/skill';
import { SkillService } from '../../server/controllers/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {
  newStack= new Skill();

  @Input() currentUser;
  @Input() images;
  @Output() createStackEvent = new EventEmitter;
  @Output() destroySkillEvent = new EventEmitter;
  @Output() updateStackEvent = new EventEmitter;
  constructor(
    private _skillService: SkillService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  createStack(stack){
    this.createStackEvent.emit(this.newStack);
    this.newStack = new Skill();
  }
  deleteStack(stack){
    this.destroySkillEvent.emit(stack)
  }
  updateStack(stack){
    this.updateStackEvent.emit(stack);
  }

}
