import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackopsPageRoutingModule } from './blackops-routing.module';

import { BlackopsPage } from './blackops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackopsPageRoutingModule
  ],
  declarations: [BlackopsPage]
})
export class BlackopsPageModule {}
