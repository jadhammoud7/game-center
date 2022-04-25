import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdinfoPage } from './cdinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CdinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdinfoPageRoutingModule {}
