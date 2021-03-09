import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Caso, Casos } from '../interfaces/Casos.interface';

@Injectable({
  providedIn: 'root'
})
export class CasosService {

  api: string = environment.api;
  API = `${this.api}/api/t_casos`;

constructor(private http: HttpClient) { }


getCas(){
  return this.http.get<Casos>(this.API);
}

getca(id:string){
  return this.http.get<Caso>(`${this.API}/${id}`);
}

createCa(caso : Caso){
      return this.http.post<Caso>(this.API, caso);
}

updateCa(id, caso : Caso){
  return this.http.put<Caso>(`${this.API}/${id}`, caso);
}

deleteCa(id:string){
  return this.http.delete<Caso>(`${this.API}/${id}`);
}


}
