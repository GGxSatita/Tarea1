import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestParametrosPageRoutingModule } from './test-parametros-routing.module';

import { TestParametrosPage } from './test-parametros.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestParametrosPageRoutingModule,
    ComponentsModule

  ],
  declarations: [TestParametrosPage]
})
export class TestParametrosPageModule {}
