import { ShareDesktopPageModule } from './share-desktop/share-desktop.module';
import { ShareAndroidPageModule } from './share-android/share-android.module';
import { SentryErrorHandler } from './sentry-error-handler';
import { ErrorHandler } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthorizationService } from './services/authorization.service';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';

import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { AuthServiceMobile } from './services/auth.service';
import { JWTService } from './services/jwt.service';
import { AuthModule, AuthService, LocalStorageCache } from '@auth0/auth0-angular';
import { AuthAngularService } from './services/authAngular.service';
import { StripeService } from './stripe.service';
import { AndroidSubscriptionService } from './services/androidSubscription.service';
import { Capacitor } from '@capacitor/core';

const redirectUri = `pro.jonathanduncan.swsignwriter://swsignwriter-dev.auth0.com/capacitor/pro.jonathanduncan.swsignwriter/callback`;
const redirectUri2 = "http://localhost:4200/callback";
const native = Capacitor.isNativePlatform();


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProfileComponent],
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
    AuthModule.forRoot(//native ? 
      {
      domain: "swsignwriter-dev.auth0.com",
      clientId: "IOGjjHabe8LFJRu5sKBuQ2LFJT2mwDLx",
      redirectUri,
      useRefreshTokens: true,
      cacheLocation : 'localstorage'
      //clientId: "IOGjjHabe8LFJRu5sKBuQ2LFJT2mwDLx",
      //redirectUri
    }
    //  : {
    //   domain: "swsignwriter-dev.auth0.com",
    //   clientId: "ZwbFfCpbcn8LDr5ubKYieMuL0MoNcnzK",
    //   redirectUri: `${window.location.origin}/callback`
    //   //clientId: "IOGjjHabe8LFJRu5sKBuQ2LFJT2mwDLx",
    //   //redirectUri
    // }
    ),
    AppRoutingModule,
    ChooseSignPageModule,
    ShowImagePageModule,
    ShareIOSPageModule,
    ShareAndroidPageModule,
    ShareDesktopPageModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),   
    
  ],
  exports: [TranslateModule],
  providers: [
    AndroidSubscriptionService,
    AuthAngularService,
    JWTService,
    AuthServiceMobile,
    SafariViewController,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    SignsLookupService,
    DocumentService,
    SocialSharingService,
    SocialSharing,
    AuthorizationService,
    UserService,
    InAppPurchase2,
    StripeService,
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}