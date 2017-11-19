import { Component, NgModule } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as model from '../../model/model';
import * as page from '../../pages/pages';

@Component({
  selector: 'page-hospital-list',
  templateUrl: 'hospital-list.html',
})
export class HospitalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.getHospital();
  }

  searchQuery: string = "";

  getHospital(){
    this.http.get("http://www.mocky.io/v2/5a1158032d000090125d16cd").subscribe(resp => {
      this.hospitalList = resp.json();
    });
  }

  hospitalList: any = [];

  // hospitalList : model.Hospital[] = [
  //   { id: 1, name: "Puskesmas Badung 1", location:""},
  //   { id: 2, name: "Puskesmas Badung 2", location:""},
  //   { id: 3, name: "Puskesmas Badung 3", location:""},
  //   { id: 4, name: "Puskesmas Badung 4", location:""},
  //   { id: 5, name: "Puskesmas Kuta Utara 1", location:""},
  //   { id: 6, name: "Puskesmas Kuta Utara 2", location:""},
  //   { id: 7, name: "Puskesmas Kuta Selatan 1", location:""},
  //   { id: 8, name: "Puskesmas Kuta Selatan 2", location:""},
  // ];

  filteredHospital(){
    return this.hospitalList.filter(x => x.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
  }

  goToPatientType(){
    this.navCtrl.push(page.PatientTypePage);
  }
}
