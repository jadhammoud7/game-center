import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RrrPageRoutingModule } from './rrr-routing.module';

import { RrrPage } from './rrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RrrPageRoutingModule
  ],
  declarations: [RrrPage]
})
export class RrrPageModule {}
