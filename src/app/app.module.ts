import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import * as page from '../pages/pages';
import * as provider from '../provider/provider'

@NgModule({
  declarations: [
    MyApp,
    page.HomePage,
    page.LoginPage,
    page.HospitalListPage,
    page.PatientRegistrationPage,
    page.PatientTypePage,
    page.VisitTimePage,
    page.PolyclinicListPage,
    page.QueueNoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    page.HomePage,
    page.LoginPage,
    page.HospitalListPage,
    page.PatientRegistrationPage,
    page.PatientTypePage,
    page.VisitTimePage,
    page.PolyclinicListPage,
    page.QueueNoPage
  ],
  providers: [
    provider.AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
