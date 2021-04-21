import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDesktopPage } from './share-desktop.page';

describe('ShareDesktopPage', () => {
  let component: ShareDesktopPage;
  let fixture: ComponentFixture<ShareDesktopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDesktopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
