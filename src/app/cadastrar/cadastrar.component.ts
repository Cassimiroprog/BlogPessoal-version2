import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
/* variaveis sempre declaradas em cima dos construtores
usuarioLogin, estamos estanciandos os objetos 
quando eu uso o this. traz pra mim todos os atributos*/
usuario: Usuario = new Usuario
confirmarSenha: string
 tipoUsuario: string

 constructor(
    private authService: AuthService,
    private router: Router
) { }

  ngOnInit()  {
    
    window.scroll(0,0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  tipoUser(event: any){
    this.tipoUsuario = event.target.value 
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario
  
  if(this.usuario.senha != this.confirmarSenha){
    alert('A senhas estão incorretas.')
  } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {this.usuario = resp
        console.log(this.usuario) 
      this.router.navigate(['/entrar']) 
        alert("Usuario cadastrado com êxito")
  })
  }
  }

}
