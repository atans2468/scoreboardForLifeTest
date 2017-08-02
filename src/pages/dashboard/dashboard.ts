import { NavController, MenuController } from 'ionic-angular/index';
import { Component } from '@angular/core';

import { WeightDetailsPage } from '../weight-details/weight-details';
import { Settings } from '../settings/settings';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'dashboard.html'
})

export class Dashboard {
  constructor(private menu: MenuController, public navCtrl: NavController) { }

  itemDetails(){
   this.navCtrl.push(WeightDetailsPage);
  }

  //Enabling swipe to expand sidemenu
  ionViewDidEnter() {
    this.menu.swipeEnable(true, 'menu1');
  }

}
