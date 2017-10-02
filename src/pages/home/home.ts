import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as provider from "../../provider/provider";
import * as page from "../../pages/pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: provider.AuthService) {
    if (!this.authService.isLoggedIn()){
      this.navCtrl.push(page.LoginPage);
    }
  }

  login(){}

  goToHospitalList(showLocation: boolean){
    this.navCtrl.push(page.HospitalListPage);    
  }
}
