import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GearofwarPageRoutingModule } from './gearofwar-routing.module';

import { GearofwarPage } from './gearofwar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GearofwarPageRoutingModule
  ],
  declarations: [GearofwarPage]
})
export class GearofwarPageModule {}
