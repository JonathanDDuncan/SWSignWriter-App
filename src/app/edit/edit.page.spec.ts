import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { PipesModule } from './../pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPage } from './edit.page';

describe('EditPage', () => {
  let component: EditPage;
  let fixture: ComponentFixture<EditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [PipesModule, RouterTestingModule,
        IonicStorageModule.forRoot({
          name: '__testswsignwriterdb'
        })],
      providers: [ModalController, AngularDelegate],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
