import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tipos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./paginas/estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'clinicas',
    loadChildren: () => import('./paginas/clinicas/clinicas.module').then( m => m.ClinicasPageModule)
  },
  {
    path: 'profesionales',
    loadChildren: () => import('./paginas/profesionales/profesionales.module').then( m => m.ProfesionalesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./paginas/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./paginas/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./paginas/casos/casos.module').then( m => m.CasosPageModule)
  },
  {
    path: 'boletines',
    loadChildren: () => import('./paginas/boletines/boletines.module').then( m => m.BoletinesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
