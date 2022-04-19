import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemonPageRoutingModule } from './demon-routing.module';

import { DemonPage } from './demon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemonPageRoutingModule
  ],
  declarations: [DemonPage]
})
export class DemonPageModule {}
