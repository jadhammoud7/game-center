import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdwarPageRoutingModule } from './coldwar-routing.module';

import { ColdwarPage } from './coldwar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdwarPageRoutingModule
  ],
  declarations: [ColdwarPage]
})
export class ColdwarPageModule {}
