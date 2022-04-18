import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchdogsPageRoutingModule } from './watchdogs-routing.module';

import { WatchdogsPage } from './watchdogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchdogsPageRoutingModule
  ],
  declarations: [WatchdogsPage]
})
export class WatchdogsPageModule {}
