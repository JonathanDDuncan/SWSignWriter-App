import { IdToken } from "@auth0/auth0-spa-js";
import { BehaviorSubject } from "rxjs";

export interface AuthServiceModel {
    login: () => void;
    logout: () => void;
    getUser: () => IdToken;
    isLoggedIn: BehaviorSubject<boolean>;
    user: IdToken;   
  }