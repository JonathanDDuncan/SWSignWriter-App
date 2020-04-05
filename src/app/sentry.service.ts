import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://2366578d65db483c829fcdf83879c8c9@sentry.io/5189477'
});
@Injectable({
  providedIn: 'root'
})

export class SentryService {

  constructor() { 
    debugger;
  }

  sentryMessage(message) {
    debugger;
    Sentry.captureMessage(message);
  }
}
