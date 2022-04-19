import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdwarPage } from './coldwar.page';

const routes: Routes = [
  {
    path: '',
    component: ColdwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdwarPageRoutingModule {}
