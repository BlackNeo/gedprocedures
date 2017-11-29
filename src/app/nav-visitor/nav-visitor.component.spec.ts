import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVisitorComponent } from './nav-visitor.component';

describe('NavVisitorComponent', () => {
  let component: NavVisitorComponent;
  let fixture: ComponentFixture<NavVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
