import { NavController, MenuController } from 'ionic-angular/index';
import { Component } from '@angular/core';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  
  constructor(private menu: MenuController, private nav: NavController, public navCtrl: NavController) { }
  
  public openPage1() {
    this.nav.setRoot(Login);
  }

  login(){
   this.navCtrl.setRoot(Dashboard);
  }

  //Disabling swipe to expand sidemenu
  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu1');
  }
}