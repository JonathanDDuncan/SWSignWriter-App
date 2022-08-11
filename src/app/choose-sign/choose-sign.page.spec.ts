import { IonicStorageModule } from '@ionic/storage-angular';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { PipesModule } from './../pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChooseSignPage } from './choose-sign.page';

describe('ChooseSignPage', () => {
  let component: ChooseSignPage;
  let fixture: ComponentFixture<ChooseSignPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [ModalController, AngularDelegate],
      declarations: [ChooseSignPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [PipesModule,
        IonicStorageModule.forRoot({
        name: '__testswsignwriterdb'
      })],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
