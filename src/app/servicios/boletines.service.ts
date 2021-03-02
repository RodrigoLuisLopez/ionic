import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Boletin {
  id?: string;
  c_profesional_id: string;
  titulo: string;
  subtitulo: string;
  contenido: string;
  autor: string
}




@Injectable({
  providedIn: 'root'
})
export class BoletinesService {


  API = 'http://127.0.0.1:8000/api/c_boletins';

  constructor(private http: HttpClient) { }


getBols(){
  return this.http.get<any>(this.API);
}

getBol(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createBol(
  c_profesional_id: string,
  titulo: string,
  subtitulo: string,
  contenido: string,
  autor: string)
  {
  return this.http.post<any>(this.API, {c_profesional_id, titulo, subtitulo, contenido, autor});
}

deleteBol(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateBol(id:string, tipo : Boletin){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}
