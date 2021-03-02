import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  id?: string;
  c_tipo_id: string;
  nombre: string;
  edad: string;
  localidad: string
}


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  API = 'http://127.0.0.1:8000/api/t_usuarios';

  constructor(private http: HttpClient) { }


getUsuarios(){
  return this.http.get<any>(this.API);
}

getUsuario(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createUsuario(
  c_tipo_id: string,
  nombre: string,
  edad: string,
  localidad: string)
  {
  return this.http.post<any>(this.API, {c_tipo_id, nombre, edad,localidad});
}

deleteUsuario(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateUsuario(id:string, tipo : Usuario){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}


}