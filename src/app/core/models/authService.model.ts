import { IdToken } from "@auth0/auth0-spa-js";
import { BehaviorSubject, Observable } from "rxjs";
import { UserProfile } from "../../user/user-profile";

export interface AuthServiceModel {
    login: () => void;
    logout: () => void;
    getUser: () => IdToken;
    convertTokenToUserProfile: (token : IdToken) => UserProfile;
    isLoggedIn: BehaviorSubject<boolean>;
    user: BehaviorSubject<IdToken>;  
  }