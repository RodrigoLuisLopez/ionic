import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipos, Tipo } from '../interfaces/Tipos.interface';


@Injectable({
  providedIn: 'root'
})
export class TiposService {

  api: string = environment.api;
  API = `${this.api}/api/c_tipos`;

  constructor(private http: HttpClient) { }


  getTipos() {
    return this.http.get<Tipos>(this.API);
  }

  getTipo(id: string) {
    return this.http.get<Tipo>(`${this.API}/${id}`);
  }

  createTipo(tipo: Tipo) {
    return this.http.post<Tipo>(this.API, tipo);
  }

  updateTipo(id, tipo: Tipo) {
    return this.http.put<Tipo>(`${this.API}/${id}`, tipo);
  }

  deleteTipo(id: string) {
    return this.http.delete<Tipo>(`${this.API}/${id}`);
  }




  /* show(id:string): Promise<Tipo>{
  
    return new Promise(resolve=>{
      this.http.get<Tipo>(`${this.API}/${id}`).subscribe(r=>{       
        resolve(r);
      });
    });
     
  } */


}


