import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profesional, Profesionales } from '../interfaces/Profesionales.interface';

@Injectable({
  providedIn: 'root'
})


export class ProfesionalesService {

    
  api: string = environment.api;
  API = `${this.api}/api/c_profesionals`;

  constructor(private http: HttpClient) { }


getProfesionals(){
  return this.http.get<Profesionales>(this.API);
}

getProfesional(id:string){
  return this.http.get<Profesional>(`${this.API}/${id}`);
}

createProfesional(profesional : Profesional){
  return this.http.post<Profesional>(this.API, profesional);
}

updateProfesional(id, profesional : Profesional){
  return this.http.put<Profesional>(`${this.API}/${id}`, profesional);
}

deleteProfesional(id:string){
  return this.http.delete<Profesional>(`${this.API}/${id}`);
}


}



