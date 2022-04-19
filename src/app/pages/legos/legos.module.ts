import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegosPageRoutingModule } from './legos-routing.module';

import { LegosPage } from './legos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegosPageRoutingModule
  ],
  declarations: [LegosPage]
})
export class LegosPageModule {}
