import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthReceiverComponent } from './auth-receiver.component';

describe('AuthReceiverComponent', () => {
  let component: AuthReceiverComponent;
  let fixture: ComponentFixture<AuthReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthReceiverComponent]
    });
    fixture = TestBed.createComponent(AuthReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
