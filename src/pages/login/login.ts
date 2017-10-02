import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as model from "../../model/model"
import * as provider from "../../provider/provider"

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: model.User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: provider.AuthService) {
  }

  login(){
    this.authService.login(this.user);
    this.navCtrl.pop();
  }

}
