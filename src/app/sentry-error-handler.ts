import {  ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://2366578d65db483c829fcdf83879c8c9@sentry.io/5189477'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error.error || error);
    console.log(error);
  }

  sentryMessage(message) {
    Sentry.captureMessage(message);
  }
}
