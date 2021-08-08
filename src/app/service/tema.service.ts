import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService  {

constructor(private http: HttpClient) { }

token = {
  headers: new HttpHeaders().set('Authorization', environment.token) 
}
//criando as 4 operações//  
//criando todos os temas, não recebe nennhum parametro, mas tem o observable que recebe o objeto da model tema. Se traz uma lista, ele precisa de um objeto do tipo array//
getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)// this token adicionado no header, adcionando esse objeto// 
}
//precisa de um objeto pra colocar no banco de dados ''(tema: Tema)'', ele não é array de tema pq é unico, psota um tema por vez//  
postTema(tema: Tema): Observable<Tema>{
  return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
}

} 
