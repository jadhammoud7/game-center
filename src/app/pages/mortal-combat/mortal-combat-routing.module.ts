import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalCombatPage } from './mortal-combat.page';

const routes: Routes = [
  {
    path: '',
    component: MortalCombatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalCombatPageRoutingModule {}
