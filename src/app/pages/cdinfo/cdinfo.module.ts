import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdinfoPageRoutingModule } from './cdinfo-routing.module';

import { CdinfoPage } from './cdinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdinfoPageRoutingModule
  ],
  declarations: [CdinfoPage]
})
export class CdinfoPageModule {}
