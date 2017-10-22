import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as model from '../../model/model';
import * as page from '../../pages/pages';

@Component({
    selector: 'page-polyclinic-list',
    templateUrl: 'polyclinic-list.html',
})
export class PolyclinicListPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    searchQuery: string = "";

    poliList: model.Polyclinic[] = [
        { id: 1, name: "Umum" },
        { id: 2, name: "Gigi" },
        { id: 3, name: "KIA" },
        { id: 4, name: "Gizi" },
    ];

    filteredPoli() {
        return this.poliList.filter(x => x.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
    }

    goToQueueNo() {
        this.navCtrl.push(page.QueueNoPage);
    }

}
