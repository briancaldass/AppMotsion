import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Imagenes } from '../pages/imagenes/imagenes';
import { Contacto } from '../pages/contacto/contacto';
import { Blog } from '../pages/blog/blog';
import { Videos } from '../pages/videos/videos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages : Array<{logo:string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage=HomePage;

    this.pages =[
      {logo: "icon-home",  component: HomePage},
      {logo: "icon-image", component: Imagenes},
      {logo: "icon-video", component: Videos},
      {logo: "icon-blog",  component: Blog},
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

