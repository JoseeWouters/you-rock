import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  inputName: string;
  userName: string;
  constructor(private storage: Storage) { }

  ngOnInit() {
  }
  
  submitUsername() {
    this.storage.set('userName', this.inputName).then( () => {
      this.userName = this.inputName;
      this.inputName = '';
    });
  }

}
