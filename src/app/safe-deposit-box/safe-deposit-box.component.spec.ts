import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDepositBoxComponent } from './safe-deposit-box.component';

describe('SafeDepositBoxComponent', () => {
  let component: SafeDepositBoxComponent;
  let fixture: ComponentFixture<SafeDepositBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeDepositBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDepositBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
