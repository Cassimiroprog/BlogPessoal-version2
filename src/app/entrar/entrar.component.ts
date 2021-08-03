import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod' 

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
  private auth: AuthService,
  private router: Router
  ) { }

  ngOnInit() {
  window.scroll(0,0)
  }

  entrar(){ 
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp 

      environment.token = this.usuarioLogin.token /*Se esse token (criado no backend existir), conseguimos saber se o usuário existe apartir deste token, mostrando ou não o menu */
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.id 
      


      this.router.navigate(['/inicio']) 
    }, erro =>{
      if(erro.status == 500){
        alert('Usuario ou senha estão incorretos')
      } /* a barra serve para quando queremos referenciar */ 
    })  
  }
}