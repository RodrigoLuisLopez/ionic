import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { Estudiante, Estudiantes } from '../interfaces/Estudiantes.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  
  api: string = environment.api;
  API = `${this.api}/api/c_estudiantes`;

  constructor(private http: HttpClient) { }


getEss(){
  return this.http.get<Estudiantes>(this.API);
}

getEs(id:string){
  return this.http.get<Estudiante>(`${this.API}/${id}`);
}

createEs(estudiante:Estudiante){
  return this.http.post<Estudiante>(this.API, estudiante);
}

updateEs(id, estudiante : Estudiante){
  return this.http.put<Estudiante>(`${this.API}/${id}`, estudiante);
}

deleteEs(id:string){
  return this.http.delete<Estudiante>(`${this.API}/${id}`);
}

}
