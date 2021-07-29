import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuComponent } from './menuComponent/entrar.component'

const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent}
]; 

@NgModule({ 
  imports: [RouterModule.forRoot(routes)]
  exports: [RouterModule],
}) 
export class AppRoutingModule{ }
