import { Postagem } from "./Postagem"

export class Usuario{
    public id: number 
    public nome: string /**Não é letra maiuscula pq não é objeto e sim o tipo de dado */
    public usuario: string 
    public senha: string 
    public foto: string 
    public tipo: string 
    public dataNascimento: Date 
    public postagem: Postagem[]
}