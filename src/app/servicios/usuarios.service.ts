import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario, Usuarios } from '../interfaces/Usuarios.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  api: string = environment.api;
  API = `${this.api}/api/t_usuarios`;

  constructor(private http: HttpClient) { }


getUsuarios(){
  return this.http.get<Usuarios>(this.API);
}

getUsuario(id:string){
  return this.http.get<Usuario>(`${this.API}/${id}`);
}

createUsuario(usuario : Usuario){
  return this.http.post<Usuario>(this.API, usuario);
}

updateUsuario(id, usuario : Usuario){
  return this.http.put<Usuario>(`${this.API}/${id}`, usuario);
}


deleteUsuario(id:string){
  return this.http.delete<Usuario>(`${this.API}/${id}`);
}


}