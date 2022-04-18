import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastofusPageRoutingModule } from './lastofus-routing.module';

import { LastofusPage } from './lastofus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastofusPageRoutingModule
  ],
  declarations: [LastofusPage]
})
export class LastofusPageModule {}
