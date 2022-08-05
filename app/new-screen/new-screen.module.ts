import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewScreenPageRoutingModule } from './new-screen-routing.module';

import { NewScreenPage } from './new-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewScreenPageRoutingModule
  ],
  declarations: [NewScreenPage]
})
export class NewScreenPageModule {}
