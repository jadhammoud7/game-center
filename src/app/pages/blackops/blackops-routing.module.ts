import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackopsPage } from './blackops.page';

const routes: Routes = [
  {
    path: '',
    component: BlackopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackopsPageRoutingModule {}
