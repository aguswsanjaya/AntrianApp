import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-queue-no',
  templateUrl: 'queue-no.html',
})
export class QueueNoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  queueNo = 1;
  
}
