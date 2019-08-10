import { CallbackComponent } from './callback/callback.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { ShowImagePageModule } from './show-image/show-image.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChooseSignPageModule } from './choose-sign/choose-sign.module';
import { PipesModule } from './pipes/pipes.module';
import { SignsLookupService } from './signs-lookup.service';
import { DocumentService } from './document.service';
import { SocialSharingService } from './social-sharing.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, CallbackComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({
      name: '__swsignwriterdb'
    }),
    AppRoutingModule,
    ChooseSignPageModule,
    ShowImagePageModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [TranslateModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SignsLookupService,
    DocumentService,
    SocialSharingService,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
