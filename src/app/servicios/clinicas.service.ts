import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Clinica {
  id?: string;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string
}



@Injectable({
  providedIn: 'root'
})


export class ClinicasService {

  API = 'http://127.0.0.1:8000/api/c_clinicas';

  constructor(private http: HttpClient) { }


getClinicas(){
  return this.http.get<any>(this.API);
}

getClinica(id:string){
  return this.http.get<any>(`${this.API}/${id}`);
}

createClinica(
  nombre: string,
  direccion: string,
  telefono: string,
  correo: string)
  {
  return this.http.post<any>(this.API, {
    nombre, direccion, telefono, correo
  });
}

deleteClinica(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

updateClinica(id:string, tipo : Clinica){
  return this.http.put<any>(`${this.API}/${id}`, tipo);
}

}
