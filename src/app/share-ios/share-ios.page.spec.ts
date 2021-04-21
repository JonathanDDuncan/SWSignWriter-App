import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIOSPage } from './share-ios.page';

describe('ShareIOSPage', () => {
  let component: ShareIOSPage;
  let fixture: ComponentFixture<ShareIOSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareIOSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareIOSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
