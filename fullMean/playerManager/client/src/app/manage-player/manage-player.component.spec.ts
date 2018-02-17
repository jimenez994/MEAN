import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlayerComponent } from './manage-player.component';

describe('ManagePlayerComponent', () => {
  let component: ManagePlayerComponent;
  let fixture: ComponentFixture<ManagePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
