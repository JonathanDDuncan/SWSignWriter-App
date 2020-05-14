import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserTypeService {

  constructor() { }


  //  * @summary
  //  * utils.isMobile
  //  * --------------
  //  * @desc
  //  * Creates a global object with member functions that test if the client's browser
  //  * belongs to a specific family of devices.
  //  * @function utils.isMobile
  //  * @return {Boolean}
  //  * @see {@link https://stackoverflow.com/questions/32570067/how-to-detect-whether-browser-is-ios-android-or-desktop-using-jquery},
  //  * {@link https://bitsrc.io/tomlandau/simple-js/global/is-mobile/code#src/global/isMobile.js}


  utils() {
    return  {
      getUserAgent: function () {
        return navigator.userAgent;
      },
      Android: function () {
        return /Android/i.test(this.getUserAgent()) && !this.Windows();
      },
      BlackBerry: function () {
        return /BlackBerry|BB10|PlayBook/i.test(this.getUserAgent());
      },
      iPhone: function () {
        return /iPhone/i.test(this.getUserAgent()) && !this.iPad() && !this.Windows();
      },
      iPod: function () {
        return /iPod/i.test(this.getUserAgent());
      },
      iPad: function () {
        return /iPad/i.test(this.getUserAgent());
      },
      iOS: function () {
        return (this.iPad() || this.iPod() || this.iPhone());
      },
      Opera: function () {
        return /Opera Mini/i.test(this.getUserAgent());
      },
      Windows: function () {
        return /Windows Phone|IEMobile|WPDesktop/i.test(this.getUserAgent());
      },
      KindleFire: function () {
        return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i
        .test(this.getUserAgent());
      },
      any: function () {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
      }
    };
  }
}
