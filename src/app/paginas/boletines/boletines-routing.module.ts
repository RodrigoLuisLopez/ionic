import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletinesPage } from './boletines.page';

const routes: Routes = [
  {
    path: '',
    component: BoletinesPage
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletinesPageRoutingModule {}
