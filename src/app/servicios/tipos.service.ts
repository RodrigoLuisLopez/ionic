import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Tipo {
  id?: string;
  nombre: string;
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  API = 'http://127.0.0.1:8000/api/c_tipos';

  constructor(private http: HttpClient) { }


getTipos(){
  return this.http.get<any>(this.API);
}

getTipo(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createTipo(nombre:string, descripcion:string){
  return this.http.post<any>(this.API, {
    nombre, descripcion
  });
}

deleteTipo(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateTipo(id:string, tipo : Tipo){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}


