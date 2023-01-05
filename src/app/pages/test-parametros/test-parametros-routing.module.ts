import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestParametrosPage } from './test-parametros.page';

const routes: Routes = [
  {
    path: '',
    component: TestParametrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestParametrosPageRoutingModule {}
