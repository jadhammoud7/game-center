import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReptidePage } from './reptide.page';

const routes: Routes = [
  {
    path: '',
    component: ReptidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReptidePageRoutingModule {}
