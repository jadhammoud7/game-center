import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReptidePageRoutingModule } from './reptide-routing.module';

import { ReptidePage } from './reptide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReptidePageRoutingModule
  ],
  declarations: [ReptidePage]
})
export class ReptidePageModule {}
