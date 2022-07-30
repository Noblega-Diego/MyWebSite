import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalTitleComponent } from './my-personal-title.component';

describe('MyPersonalTitleComponent', () => {
  let component: MyPersonalTitleComponent;
  let fixture: ComponentFixture<MyPersonalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonalTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
