import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioBodyComponent } from './porfolio-body.component';

describe('PorfolioBodyComponent', () => {
  let component: PorfolioBodyComponent;
  let fixture: ComponentFixture<PorfolioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
