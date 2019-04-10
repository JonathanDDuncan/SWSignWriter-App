import { DomSanitizer } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { PipesModule } from './../pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPage } from './view.page';

describe('ViewPage', () => {
  let component: ViewPage;
  let fixture: ComponentFixture<ViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ModalController,
        AngularDelegate,
        SocialSharing,
        { provide: ssw, useClass: {} },
        {
          provide: DomSanitizer, useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString'
          }
        }],
      declarations: [ViewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [PipesModule,
        IonicStorageModule.forRoot({
          name: '__testquicksigndocumentdb'
        }), RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
