import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodoffallPage } from './godoffall.page';

const routes: Routes = [
  {
    path: '',
    component: GodoffallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodoffallPageRoutingModule {}
