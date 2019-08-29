import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage,) {}

  userName: string;

  // get the username from storage
  ngOnInit() {
    this.storage.get('userName').then((name)=> {
      this.userName = name;
    })
  }
}
