import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposPage } from './tipos.page';

const routes: Routes = [
  {
    path: '',
    component: TiposPage
  },
  {
    path: 'show/:tipoid',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:tipoid',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposPageRoutingModule {}
