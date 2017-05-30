import { Component } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
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
  nav: Nav;
  pages : Array<{logo:string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage=HomePage;

    this.pages =[
      {logo: "h",  component: HomePage},
      {logo: "t", component: Contacto},
      {logo: "c",  component: Blog},
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  IrPagina(page){
    this.nav.setRoot(page);
  }


}

