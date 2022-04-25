import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllcdsPageRoutingModule } from './allcds-routing.module';

import { AllcdsPage } from './allcds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllcdsPageRoutingModule
  ],
  declarations: [AllcdsPage]
})
export class AllcdsPageModule {}
