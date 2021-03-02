import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicasPage } from './clinicas.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicasPage
  },
  {
    path: 'show/:clinicaid',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:clinicaid',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicasPageRoutingModule {}
