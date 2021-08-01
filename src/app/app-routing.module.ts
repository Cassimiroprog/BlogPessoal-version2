import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from 'src/app/cadastrar/cadastrar.component';
import { EntrarComponent } from 'src/app/entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch:'full'},

  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent}, 
  {path: 'inicio', component: InicioComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }