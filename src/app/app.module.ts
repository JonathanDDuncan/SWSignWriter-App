import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { ChooseSignPageModule } from './choose-sign/choose-sign.module';
import { PipesModule } from './pipes/pipes.module';
import { SignsLookupService } from './signs-lookup.service';
import { DocumentService } from './document.service';
import { SocialSharingService } from './social-sharing.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__quicksigndocumentdb'
    }),
    AppRoutingModule,
    ChooseSignPageModule,
    PipesModule
  ],
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
export class AppModule {}
