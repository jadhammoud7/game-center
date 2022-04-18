import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SniperPage } from './sniper.page';

const routes: Routes = [
  {
    path: '',
    component: SniperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SniperPageRoutingModule {}
