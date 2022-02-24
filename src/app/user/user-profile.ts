import { Injectable } from '@angular/core';
import { IdToken } from '@auth0/auth0-spa-js';

export interface UserProfile {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
}