import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './settings.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  public appPages: {
    title: string;
    url: string;
    icon: string;
  }[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settingsService: SettingsService,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');

    settingsService.getUILanguage().then(language => {
      console.log(language);
      this.translate.use(language);
    });

    this.initializeApp();
    platform.ready().then(() => {
      this.settingsService.loadDefaultPuddles();
    });


  }
  ngOnInit(): void {
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
            this.translate.get('Subscription').subscribe((subscription) => {
              this.appPages = [
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
                  icon: 'subscription'
                },
                {
                  title: about,
                  url: '/about',
                  icon: 'about'
                },
                {
                  title: logout,
                  url: '/logout',
                  icon: 'logout'
                }
              ];
            });
          });
        });
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
