import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestParaExtrasPageRoutingModule } from './test-para-extras-routing.module';

import { TestParaExtrasPage } from './test-para-extras.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestParaExtrasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestParaExtrasPage]
})
export class TestParaExtrasPageModule {}
