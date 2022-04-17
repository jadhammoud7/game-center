import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalCombatPageRoutingModule } from './mortal-combat-routing.module';

import { MortalCombatPage } from './mortal-combat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalCombatPageRoutingModule
  ],
  declarations: [MortalCombatPage]
})
export class MortalCombatPageModule {}
