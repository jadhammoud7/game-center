import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RrrPage } from './rrr.page';

const routes: Routes = [
  {
    path: '',
    component: RrrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RrrPageRoutingModule {}
