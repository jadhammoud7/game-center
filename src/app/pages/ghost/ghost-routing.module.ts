import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhostPage } from './ghost.page';

const routes: Routes = [
  {
    path: '',
    component: GhostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhostPageRoutingModule {}
