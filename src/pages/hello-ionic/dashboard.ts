import { NavController, MenuController } from 'ionic-angular/index';
import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  constructor(private menu: MenuController, private nav: NavController, public navCtrl: NavController) { }

  //Enabling swipe to expand sidemenu
  ionViewDidEnter() {
    this.menu.swipeEnable(true, 'menu1');
  }

  /*displayDate(){
    new Date().toLocaleDateString();
  }
  alert(displayDate);*/

}
