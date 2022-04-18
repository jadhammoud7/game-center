import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModernwarfarePage } from './modernwarfare.page';

const routes: Routes = [
  {
    path: '',
    component: ModernwarfarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModernwarfarePageRoutingModule {}
