import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}

//This doesn't work, and I'm not sure why.
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class myPage {

  constructor(public alertCtrl: AlertController) {

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Thanks for Pressing!',
      message: 'This button doesn\'t do anything just yet. But it appreciates you pressing it nonetheless!',
      buttons: ['You\'re welcome!']
    });
    alert.present();
  }

}




