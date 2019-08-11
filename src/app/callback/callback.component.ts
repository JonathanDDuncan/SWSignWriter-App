import { StorageService } from './../storage.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService, private storage: StorageService) { }

  async ngOnInit() {
    this.auth.userProfile$.subscribe(userProfile => this.storage.SaveCurrentUserProfile(userProfile));

    this.auth.handleAuthCallback();
  }
}
