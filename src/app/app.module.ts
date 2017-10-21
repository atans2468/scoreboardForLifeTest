import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';


import { Dashboard } from '../pages/dashboard/dashboard';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { WeightDetailsPage } from '../pages/weight-details/weight-details';
import { Login } from '../pages/login/login';
import { Settings } from '../pages/settings/settings';

import { Items } from '../mocks/providers/items';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    ListMasterPage,
    ItemDetailPage,
    WeightDetailsPage,
    Login,
    Settings
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    ListMasterPage,
    ItemDetailPage,
    WeightDetailsPage,
    Login,
    Settings
  ],
  providers: [
    Items,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
