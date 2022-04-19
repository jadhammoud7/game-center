import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodoffallPageRoutingModule } from './godoffall-routing.module';

import { GodoffallPage } from './godoffall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodoffallPageRoutingModule
  ],
  declarations: [GodoffallPage]
})
export class GodoffallPageModule {}
