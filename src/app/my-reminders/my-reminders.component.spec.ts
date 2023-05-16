import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRemindersComponent } from './my-reminders.component';

describe('MyRemindersComponent', () => {
  let component: MyRemindersComponent;
  let fixture: ComponentFixture<MyRemindersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRemindersComponent]
    });
    fixture = TestBed.createComponent(MyRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
