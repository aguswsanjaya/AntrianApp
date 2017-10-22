import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as page from '../../pages/pages';

@Component({
  selector: 'page-patient-type',
  templateUrl: 'patient-type.html',
})
export class PatientTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPatientPage(isNewPatient: boolean){
    this.navCtrl.push(page.PatientRegistrationPage, {isNewPatient: isNewPatient});    
  }
}
