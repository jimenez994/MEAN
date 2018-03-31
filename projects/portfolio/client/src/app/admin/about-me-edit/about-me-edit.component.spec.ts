import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeEditComponent } from './about-me-edit.component';

describe('AboutMeEditComponent', () => {
  let component: AboutMeEditComponent;
  let fixture: ComponentFixture<AboutMeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
