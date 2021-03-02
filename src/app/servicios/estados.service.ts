import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Estado {
  id?: string;
  nombre: string;
  descripcion: string
}



@Injectable({
  providedIn: 'root'
})

export class EstadosService {

  API = 'http://127.0.0.1:8000/api/c_estados';

  constructor(private http: HttpClient) { }


getEstados(){
  return this.http.get<any>(this.API);
}

getEstado(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createEstado(nombre:string, descripcion:string){
  return this.http.post<any>(this.API, {
    nombre, descripcion
  });
}

deleteEstado(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateEstado(id:string, tipo : Estado){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}
