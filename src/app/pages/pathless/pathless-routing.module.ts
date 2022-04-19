import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathlessPage } from './pathless.page';

const routes: Routes = [
  {
    path: '',
    component: PathlessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathlessPageRoutingModule {}
