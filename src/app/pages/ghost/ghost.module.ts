import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhostPageRoutingModule } from './ghost-routing.module';

import { GhostPage } from './ghost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhostPageRoutingModule
  ],
  declarations: [GhostPage]
})
export class GhostPageModule {}
