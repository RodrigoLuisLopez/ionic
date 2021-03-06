import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosPage } from './casos.page';

const routes: Routes = [
  {
    path: '',
    component: CasosPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosPageRoutingModule {}
