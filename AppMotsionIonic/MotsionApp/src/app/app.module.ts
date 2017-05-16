import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Imagenes } from '../pages/imagenes/imagenes';
import { Blog } from '../pages/blog/blog';
import { Contacto } from '../pages/contacto/contacto';
import { Videos } from '../pages/videos/videos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Imagenes,
    Blog,
    Contacto,
    Videos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Imagenes,
    Blog,
    Contacto,
    Videos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
