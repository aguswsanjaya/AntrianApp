import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as page from '../../pages/pages';

@Component({
    selector: 'page-patient-registration',
    templateUrl: 'patient-registration.html',
})
export class PatientRegistrationPage {

    isNewPatient: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.isNewPatient = this.navParams.get("isNewPatient");
    }

    validate(){
        this.navCtrl.push(page.VisitTimePage);
    }
}
