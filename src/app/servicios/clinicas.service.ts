import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clinica, Clinicas } from '../interfaces/Clinicas.interface';

@Injectable({
  providedIn: 'root'
})


export class ClinicasService {

  api: string = environment.api;
  API = `${this.api}/api/c_clinicas`;

  constructor(private http: HttpClient) { }


getClinicas(){
  return this.http.get<Clinicas>(this.API);
}

getClinica(id:string){
  return this.http.get<Clinica>(`${this.API}/${id}`);
}

createClinica(clinica : Clinica){
  return this.http.post<Clinica>(this.API, clinica);
}

updateClinica(id, clinica : Clinica){
  return this.http.put<Clinica>(`${this.API}/${id}`, clinica);
}

deleteClinica(id:string){
  return this.http.delete<any>(`${this.API}/${id}`);
}

}
