import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Blog } from './blog';

@NgModule({
  declarations: [
    Blog,
  ],
  imports: [
    IonicPageModule.forChild(Blog),
  ],
  exports: [
    Blog
  ]
})
export class BlogModule {}
