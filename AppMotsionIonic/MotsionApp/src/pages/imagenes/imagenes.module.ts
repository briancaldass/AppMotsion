import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Imagenes } from './imagenes';

@NgModule({
  declarations: [
    Imagenes,
  ],
  imports: [
    IonicPageModule.forChild(Imagenes),
  ],
  exports: [
    Imagenes
  ]
})
export class ImagenesModule {}
