import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewScreenPage } from './new-screen.page';

const routes: Routes = [
  {
    path: '',
    component: NewScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewScreenPageRoutingModule {}
