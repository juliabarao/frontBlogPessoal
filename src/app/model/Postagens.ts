import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagens{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public tema: Tema
    public usuario: Usuario
}