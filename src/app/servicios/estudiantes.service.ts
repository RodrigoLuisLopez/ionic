import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Estudiante {
  id?: string;
  c_clinica_id: string;
  c_profesional_id: string;
  nombre: string;
  telefono: string;
  correo: string;
  localidad: string
}




@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


  API = 'http://127.0.0.1:8000/api/c_estudiantes';

  constructor(private http: HttpClient) { }


getEss(){
  return this.http.get<any>(this.API);
}

getEs(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createEs(
  c_clinica_id: string,
  c_profesional_id: string,
  nombre: string,
  telefono: string,
  correo: string,
  localidad: string)
  {
  return this.http.post<any>(this.API, {
    c_clinica_id, c_profesional_id, nombre, telefono, correo, localidad});
}

deleteEs(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateEs(id:string, tipo : Estudiante){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}
