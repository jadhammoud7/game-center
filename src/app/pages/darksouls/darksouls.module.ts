import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarksoulsPageRoutingModule } from './darksouls-routing.module';

import { DarksoulsPage } from './darksouls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarksoulsPageRoutingModule
  ],
  declarations: [DarksoulsPage]
})
export class DarksoulsPageModule {}
