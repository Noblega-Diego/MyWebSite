import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionOfMenuComponent } from './option-of-menu.component';

describe('OptionOfMenuComponent', () => {
  let component: OptionOfMenuComponent;
  let fixture: ComponentFixture<OptionOfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionOfMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionOfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
