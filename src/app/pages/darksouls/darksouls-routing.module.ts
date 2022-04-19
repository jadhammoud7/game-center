import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarksoulsPage } from './darksouls.page';

const routes: Routes = [
  {
    path: '',
    component: DarksoulsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarksoulsPageRoutingModule {}
