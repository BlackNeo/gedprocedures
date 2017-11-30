import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutsComponent } from './statuts.component';

describe('StatutsComponent', () => {
  let component: StatutsComponent;
  let fixture: ComponentFixture<StatutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
