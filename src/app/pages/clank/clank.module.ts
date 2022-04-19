import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClankPageRoutingModule } from './clank-routing.module';

import { ClankPage } from './clank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClankPageRoutingModule
  ],
  declarations: [ClankPage]
})
export class ClankPageModule {}
