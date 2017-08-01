import { NavController, MenuController } from 'ionic-angular/index';
import { Component } from '@angular/core';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'dashboard.html'
})

export class Dashboard {
  constructor(private menu: MenuController, public navCtrl: NavController) { }

  itemDetails(){
   this.navCtrl.push(ItemDetailsPage);
  }

  //Enabling swipe to expand sidemenu
  ionViewDidEnter() {
    this.menu.swipeEnable(true, 'menu1');
  }

}
