import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripesuccessPage } from './stripesuccess.page';

describe('StripesuccessPage', () => {
  let component: StripesuccessPage;
  let fixture: ComponentFixture<StripesuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripesuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripesuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
