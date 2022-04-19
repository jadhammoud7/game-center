import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearofwarPage } from './gearofwar.page';

const routes: Routes = [
  {
    path: '',
    component: GearofwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearofwarPageRoutingModule {}
