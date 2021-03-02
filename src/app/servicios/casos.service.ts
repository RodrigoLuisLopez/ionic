import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Caso {
  id?: string;
  nombre: string;
  descripcion: string;
  fecha: string;
  c_profesional_id: string;
  t_usuario_id: string;
  c_estado_id: string
}




@Injectable({
  providedIn: 'root'
})
export class CasosService {


  API = 'http://127.0.0.1:8000/api/t_casos';

  constructor(private http: HttpClient) { }


getCas(){
  return this.http.get<any>(this.API);
}

getca(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createCa(
  nombre: string,
  descripcion: string,
  fecha: string,
  c_profesional_id: string,
  t_usuario_id: string,
  c_estado_id: string)
  {
  return this.http.post<any>(this.API, {
    nombre, descripcion, fecha, c_profesional_id, t_usuario_id, c_estado_id});
}

deleteCa(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateCa(id:string, tipo : Caso){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}
