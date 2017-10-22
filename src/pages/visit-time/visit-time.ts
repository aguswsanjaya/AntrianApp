import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as page from '../../pages/pages';

@Component({
    selector: 'page-visit-time',
    templateUrl: 'visit-time.html',
})
export class VisitTimePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goToPolyclinicList() {
        this.navCtrl.push(page.PolyclinicListPage);
    }

}
