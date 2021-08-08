import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
//precisamos estanciar o objeto tema pois ele vai ser pego pelos objetos ngmodel// 
  tema: Tema = new Tema() 
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
//injetando as dependencias necessarias//
  ) { }

  ngOnInit() { 
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    } 
    this.findAllTemas() /*não esquecer de abrir e fechar o parenteses, é um método*/


  }
 
    findAllTemas(){
      this.temaService.getAllTema().subscribe((resp: Tema[]) => {
        this.listaTemas = resp 
      })
}

cadastrar(){ //consigo chamar o métdo, ja coloquei o botao click// 
    this.temaService.postTema(this.tema).subscribe(((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas
      this.tema = new Tema()
    }) 
} 
