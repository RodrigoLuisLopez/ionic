import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boletin, Boletins } from '../interfaces/Boletines.interface';

@Injectable({
  providedIn: 'root'
})
export class BoletinesService {

  api: string = environment.api;
  API = `${this.api}/api/c_boletins`;

  constructor(private http: HttpClient) { }


getBols(){
  return this.http.get<Boletins>(this.API);
}

getBol(id:string){
  return this.http.get<Boletin>(`${this.API}/${id}`);
}

createBol(boletin : Boletin){
  return this.http.post<Boletin>(this.API, boletin);
}

updateBol(id, boletin : Boletin){
  return this.http.put<Boletin>(`${this.API}/${id}`, boletin);
}

deleteBol(id:string){
  return this.http.delete<Boletin>(`${this.API}/${id}`);
}

}
