import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksigndocPage } from './quicksigndoc.page';

describe('QuicksigndocPage', () => {
  let component: QuicksigndocPage;
  let fixture: ComponentFixture<QuicksigndocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicksigndocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksigndocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
