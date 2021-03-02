import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletinesPageRoutingModule } from './boletines-routing.module';

import { BoletinesPage } from './boletines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletinesPageRoutingModule
  ],
  declarations: [BoletinesPage]
})
export class BoletinesPageModule {}
