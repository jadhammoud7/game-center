import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathlessPageRoutingModule } from './pathless-routing.module';

import { PathlessPage } from './pathless.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathlessPageRoutingModule
  ],
  declarations: [PathlessPage]
})
export class PathlessPageModule {}
