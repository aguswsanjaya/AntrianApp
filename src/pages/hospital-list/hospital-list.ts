import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as model from '../../model/model'

@Component({
  selector: 'page-hospital-list',
  templateUrl: 'hospital-list.html',
})
export class HospitalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  searchQuery: string = "";

  hospitalList : model.Hospital[] = [
    { id: 1, name: "Puskesmas Badung 1", location:""},
    { id: 2, name: "Puskesmas Badung 2", location:""},
    { id: 3, name: "Puskesmas Badung 3", location:""},
    { id: 4, name: "Puskesmas Badung 4", location:""},
    { id: 1, name: "Puskesmas Kuta Utara 1", location:""},
    { id: 2, name: "Puskesmas Kuta Utara 2", location:""},
    { id: 3, name: "Puskesmas Kuta Selatan 1", location:""},
    { id: 4, name: "Puskesmas Kuta Selatan 2", location:""},
  ];

  hospitalSelected(hospital: model.Hospital){

  }

  filteredHospital(){
    return this.hospitalList.filter(x => x.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
  }
}
