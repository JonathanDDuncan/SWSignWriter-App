import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
public loggedin: boolean;
  constructor(
    public router: Router,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    this.loggedin = !(!profile || profile === null);
    if (this.loggedin) {
      this.router.navigate(['/login']);
    }
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }

  goContinue() {
    this.router.navigate(['/edit']);
  }

}
