import { NavController, MenuController } from 'ionic-angular/index';
import { Component } from '@angular/core';

import { Dashboard } from '../hello-ionic/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  
  constructor(private menu: MenuController, private nav: NavController, public navCtrl: NavController) { }

  foo(){
   this.navCtrl.setRoot(Dashboard);
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu1');
  }

  public openPage1() {
    this.nav.setRoot(Login);
  }
}