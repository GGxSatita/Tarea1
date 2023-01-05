import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestParaExtrasPage } from './test-para-extras.page';

const routes: Routes = [
  {
    path: '',
    component: TestParaExtrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestParaExtrasPageRoutingModule {}
