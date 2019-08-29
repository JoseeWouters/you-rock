import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Check if the intro has been shown once. 
      // If it hasn't, show the intro and set intro in storage to true
      this.storage.get('intro').then(result => {
        if(result === true) {
          this.router.navigateByUrl('/home')
        } else {
          this.router.navigateByUrl('/intro');
          this.storage.set('intro', true);
        }
      })
    });
  }
}
