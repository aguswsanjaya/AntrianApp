import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as model from '../../model/model';
import * as page from '../../pages/pages';

@Component({
    selector: 'page-polyclinic-list',
    templateUrl: 'polyclinic-list.html',
})
export class PolyclinicListPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.getPoli();
    }

    searchQuery: string = "";

    getPoli(){
        this.http.get("http://www.mocky.io/v2/5a115f3f2d00008c125d16da").subscribe(resp => {
          this.poliList = resp.json();
        });
      }

    poliList: model.Polyclinic[] = [];

    filteredPoli() {
        return this.poliList.filter(x => x.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
    }

    goToQueueNo() {
        this.navCtrl.push(page.QueueNoPage);
    }

}
