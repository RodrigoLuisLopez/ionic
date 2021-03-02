import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Profesional {
  id?: string;
  c_clinica_id: string;
  nombre: string;
  telefono: string;
  correo: string;
  localidad: string
}

@Injectable({
  providedIn: 'root'
})


export class ProfesionalesService {

  API = 'http://127.0.0.1:8000/api/c_profesionals';

  constructor(private http: HttpClient) { }


getProfesionals(){
  return this.http.get<any>(this.API);
}

getProfesional(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createProfesional(c_clinica_id: string,
  nombre: string,
  telefono: string,
  correo: string,
  localidad: string)
  {
  return this.http.post<any>(this.API, {c_clinica_id, nombre, telefono,correo,localidad});
}

deleteProfesional(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateProfesional(id:string, tipo : Profesional){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}



