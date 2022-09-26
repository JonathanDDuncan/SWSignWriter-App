import { Component, OnInit, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SettingsService } from './settings.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SplashScreen } from '@capacitor/splash-screen';

import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  public isLoggedIn = false;
  public appPages: {
    title: string;
    url: string;
    icon: string;
  }[];
  constructor(
    private platform: Platform,
    private settingsService: SettingsService,
    public translate: TranslateService,
    private ngZone: NgZone,
    private router: Router,
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
    this.translate.onLangChange.subscribe((params: LangChangeEvent) => {
      this.translateMenu();
    });
    this.translateMenu();
  }

  public translateMenu() {
    this.translate.get('Edit').subscribe((edit) => {
      this.translate.get('Settings').subscribe((settings) => {
        this.translate.get('About').subscribe((about) => {         
            this.translate.get('Home').subscribe((home) => {
              this.translate.get('Policy').subscribe(async (policy) => {
                  this.appPages = [
                    {
                      title: home,
                      url: '/home',
                      icon: 'home'
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
                      title: about,
                      url: '/about',
                      icon: 'information-circle'
                    },
                    {
                      title: policy,
                      url: '/policy',
                      icon: 'reader'
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
      setTimeout(async () => {
        await SplashScreen.hide();
      }, 2000);
    });
  }
}



