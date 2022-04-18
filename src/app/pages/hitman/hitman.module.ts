import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HitmanPageRoutingModule } from './hitman-routing.module';

import { HitmanPage } from './hitman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HitmanPageRoutingModule
  ],
  declarations: [HitmanPage]
})
export class HitmanPageModule {}
