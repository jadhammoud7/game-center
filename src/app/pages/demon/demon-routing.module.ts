import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemonPage } from './demon.page';

const routes: Routes = [
  {
    path: '',
    component: DemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemonPageRoutingModule {}
