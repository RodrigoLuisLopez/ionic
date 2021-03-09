import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estados, Estado } from '../interfaces/Estados.interface';


@Injectable({
  providedIn: 'root'
})

export class EstadosService {

  api: string = environment.api;
  API = `${this.api}/api/c_estados`;

  constructor(private http: HttpClient) { }


getEstados(){
  return this.http.get<Estados>(this.API);
}

getEstado(id:string){
  return this.http.get<Estado>(`${this.API}/${id}`);
}

createEstado(estado : Estado){
  return this.http.post<Estado>(this.API, estado);
}

updateEstado(id, estado : Estado){
  return this.http.put<Estado>(`${this.API}/${id}`, estado);
}


deleteEstado(id:string){
  return this.http.delete<Estado>(`${this.API}/${id}`);
}


}
