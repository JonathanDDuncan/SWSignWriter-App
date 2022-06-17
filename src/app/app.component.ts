import { Component, OnInit, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './settings.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Auth0Cordova from '@auth0/cordova';
import { SplashScreen } from '@capacitor/splash-screen';

import { AuthService } from '@auth0/auth0-angular';
import { mergeMap } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { AuthServiceMobile } from './services/auth.service';

const callbackUri = `pro.jonathanduncan.swsignwriter://swsignwriter-dev.auth0.com/capacitor/pro.jonathanduncan.swsignwriter/callback`;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  public isLoggedIn = false;
  private logoutTitle;
  public appPages: {
    title: string;
    url: string;
    icon: string;
  }[];
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settingsService: SettingsService,
    public translate: TranslateService,
    public auth: AuthService,
    private ngZone: NgZone,
    private router: Router,
    private storage: StorageService,
    private authService: AuthServiceMobile
  ) {
    this.translate.setDefaultLang('en');

    settingsService.getUILanguage().then(language => {
      if (language) {
        this.translate.use(language);
      }
    });

    this.initializeApp();
    platform.ready().then(() => {
      this.settingsService.loadDefaultPuddles();
    });


  }
  ngOnInit(): void {
    // Use Capacitor's App plugin to subscribe to the `appUrlOpen` event
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          // If the URL is an authentication callback URL..
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            // Call handleRedirectCallback and close the browser
            this.auth
              .handleRedirectCallback(url)
              .pipe()
              .subscribe(() => {
                this.router.navigate(['/callback']);
              });
          } else {
            //Browser.close();
          }
        }
      });
    });

    this.translate.onLangChange.subscribe((params: LangChangeEvent) => {
      this.translateMenu();
    });
    this.translateMenu();
  }

  public translateMenu() {
    this.translate.get('Edit').subscribe((edit) => {
      this.translate.get('Settings').subscribe((settings) => {
        this.translate.get('About').subscribe((about) => {
          this.translate.get('Logout').subscribe((logout) => {
            this.logoutTitle = logout;
            this.translate.get('Home').subscribe((home) => {
              this.translate.get('Subscription').subscribe(async (subscription) => {
                this.translate.get('Policy').subscribe(async (policy) => {
                  this.appPages = [
                    {
                      title: home,
                      url: '/home',
                      icon: 'home-outline'
                    },
                    {
                      title: edit,
                      url: '/edit',
                      icon: 'document'
                    },
                    {
                      title: settings,
                      url: '/settings',
                      icon: 'settings'
                    },
                    {
                      title: subscription,
                      url: '/subscribe',
                      icon: 'card'
                    },
                    {
                      title: about,
                      url: '/about',
                      icon: 'information-circle-outline'
                    },
                    {
                      title: policy,
                      url: '/policy',
                      icon: 'information-circle-outline'
                    }
                  ];

                  this.authService.isLoggedIn.subscribe((isLoggedIn) => {
                    if (isLoggedIn)
                      this.appPages.push({
                        title: logout,
                        url: '/logout',
                        icon: 'exit'
                      });
                    else
                      this.appPages = this.appPages.filter(p => p.url !== '/logout');
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    });

    // Redirect back to app after authenticating
    (window as any).handleOpenURL = (url: string) => {
      Auth0Cordova.onRedirectUri(url);
    }
  }
}



