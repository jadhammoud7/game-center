import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcdsPage } from './allcds.page';

const routes: Routes = [
  {
    path: '',
    component: AllcdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcdsPageRoutingModule {}
