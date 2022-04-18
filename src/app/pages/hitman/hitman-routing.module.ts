import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HitmanPage } from './hitman.page';

const routes: Routes = [
  {
    path: '',
    component: HitmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HitmanPageRoutingModule {}
