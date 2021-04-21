import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripecancelPage } from './stripecancel.page';

describe('StripecancelPage', () => {
  let component: StripecancelPage;
  let fixture: ComponentFixture<StripecancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripecancelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripecancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
