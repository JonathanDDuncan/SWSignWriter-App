// src/app/services/auth.config.ts

export const AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 'IOGjjHabe8LFJRu5sKBuQ2LFJT2mwDLx',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 'IOGjjHabe8LFJRu5sKBuQ2LFJT2mwDLx',
    domain: 'swsignwriter-dev.auth0.com',
    packageIdentifier: 'pro.jonathanduncan.swsignwriter', // config.xml widget ID, e.g., com.auth0.ionic
    callbackURL: "http://localhost:8100/callback",
  };