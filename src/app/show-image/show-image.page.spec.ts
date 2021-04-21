import { DomSanitizer } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { ShowImagePage } from './show-image.page';

describe('ShowImagePage', () => {
  let component: ShowImagePage;
  let fixture: ComponentFixture<ShowImagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShowImagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ModalController,
        AngularDelegate,
        {
          provide: DomSanitizer, useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString'
          }
        }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
