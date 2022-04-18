import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SniperPageRoutingModule } from './sniper-routing.module';

import { SniperPage } from './sniper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SniperPageRoutingModule
  ],
  declarations: [SniperPage]
})
export class SniperPageModule {}
