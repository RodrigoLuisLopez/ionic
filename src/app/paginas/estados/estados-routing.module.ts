import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadosPage } from './estados.page';

const routes: Routes = [
  {
    path: '',
    component: EstadosPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:estadoid',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'show/:estadoid',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadosPageRoutingModule {}
