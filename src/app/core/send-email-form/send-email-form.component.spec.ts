import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEMailFormComponent } from './send-email-form.component';

describe('SendEMailFormComponent', () => {
  let component: SendEMailFormComponent;
  let fixture: ComponentFixture<SendEMailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEMailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEMailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
