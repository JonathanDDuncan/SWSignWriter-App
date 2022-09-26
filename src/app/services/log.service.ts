import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { Log } from "../core/models/log.models";
import { HttpService } from "./httpService.service";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class LogService {    
    constructor(
        private httpService: HttpService,
        private storage: StorageService 
    ){       
    }

    async AddLog(message: string) {
        const log: Log = await this.createLogObject(message);
        this.httpService.AddLog(log).subscribe();    
    }

    private async createLogObject(message: string) {
        const source = Capacitor.getPlatform();
        const name = await this.storage.getUserName();
        const email = await this.storage.getEmail();

        return {
            message, source, name, email
        };        
    }
}