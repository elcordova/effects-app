import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaComponent} from './usuarios/lista/lista.component';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';

const router: Routes = [
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule {
}
