import { ShareDesktopPageModule } from './share-desktop/share-desktop.module';
import { ShareAndroidPageModule } from './share-android/share-android.module';
import { SentryErrorHandler } from './sentry-error-handler';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ShowImagePageModule } from './show-image/show-image.module';
import { ShareIOSPageModule } from './share-ios/share-ios.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChooseSignPageModule } from './choose-sign/choose-sign.module';
import { PipesModule } from './pipes/pipes.module';
import { SignsLookupService } from './signs-lookup.service';
import { DocumentService } from './document.service';
import { SocialSharingService } from './social-sharing.service';
import { environment } from '../environments/environment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { HttpService } from './services/httpService.service';
import { LogService } from './services/log.service';
import { UserFormPageModule } from './user-form/user-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ],
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
    FormsModule,
    ChooseSignPageModule,
    ShowImagePageModule,
    ShareIOSPageModule,
    ShareAndroidPageModule,
    ShareDesktopPageModule,
    UserFormPageModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),   
    
  ],
  exports: [TranslateModule],
  providers: [
    SafariViewController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    SignsLookupService,
    DocumentService,
    SocialSharingService,
    HTTP,
    HttpService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}