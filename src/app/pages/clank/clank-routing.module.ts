import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClankPage } from './clank.page';

const routes: Routes = [
  {
    path: '',
    component: ClankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClankPageRoutingModule {}
