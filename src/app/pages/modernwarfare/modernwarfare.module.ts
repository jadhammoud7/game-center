import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModernwarfarePageRoutingModule } from './modernwarfare-routing.module';

import { ModernwarfarePage } from './modernwarfare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModernwarfarePageRoutingModule
  ],
  declarations: [ModernwarfarePage]
})
export class ModernwarfarePageModule {}
