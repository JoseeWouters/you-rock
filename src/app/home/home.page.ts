import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { CelebrationPage } from '../celebration/celebration.page';

export interface Victory {name: string, date: Date}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage,
    public modalController: ModalController) {}

  userName: string;
  inputVictory: string;
  victories: Victory[];

  ngOnInit() {
    this.storage.get('userName').then(userName => {
      this.userName = userName;
    });

    this.storage.get('victories').then(victories => {
      this.victories = victories.sort((a: Victory, b: Victory) => a.date > b.date ? -1 : 1);
    });
  }

  submitVictory(victory) {
    this.storage.get('victories').then(victories => {
      if (victories === null) {
        victories = [];
      }

      victories.push(
        {
          name: victory,
          date: new Date(),
        }
      );

      this.storage.set('victories', victories);
      this.inputVictory = '';
      this.victories = victories.sort((a: Victory, b: Victory) => a.date > b.date ? -1 : 1);
      this.presentModal();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CelebrationPage
    });
    return await modal.present();
  }
}