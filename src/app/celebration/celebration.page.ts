import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {

  constructor(private http: HttpClient,
    private modalCtrl: ModalController) { }

  link = "https://api.giphy.com/v1/gifs/random?tag=celebrate&api_key=NXOLs6TyEz9ArmJU6EmEdIeOs1sY8rUo";
  gif;

  ngOnInit() {
    this.playSound();
    this.http.get(this.link).subscribe(res => {
      this.gif = (res as any).data.images.original.url;
    });
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  playSound() {
    let audio = new Audio();
    audio.src = '../../assets/sounds/celebrate.wav';
    audio.load();
    audio.play();
  }
}

//key NXOLs6TyEz9ArmJU6EmEdIeOs1sY8rUo