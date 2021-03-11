import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { User, UserCreate, UserLogin } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  api: string = environment.api;

  constructor(
    private http: HttpClient,
    private plat:Platform,
    private storage: Storage
    ){ }




    
    signup(user: UserCreate){

      var API = `${this.api}/api/auth/signup`;
      
      return this.http.post<UserCreate>(API, user).toPromise();
    }



    login(user: UserLogin){
       var API = `${this.api}/api/auth/login`;

      return this.http.post(API, user).toPromise();
    }


    async getuser(){

      let auth: any = await this.storage.get('auth');
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${auth.access_token}`
      });

      var API = `${this.api}/api/auth/user`;
      return this.http.get(API, {headers}).toPromise();

    }


    logout(){
      var API = `${this.api}/api/auth/logout`;

    }



    async checkIsAuthenticated() 
    {
      let now = new Date();
      let auth: any = await this.storage.get('auth');
      let fe = new Date(auth.expires_at);

      if (!!!auth){
        return false;
      }
      if ( fe <= now){
        return false;
      }

      return true;
    }



    async removeCredentials () {

      let auth: any = await this.storage.get('auth');
      let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${auth.access_token}`
      });
      
      var API = `${this.api}/api/auth/logout`;
      this.http.get(API, {headers}).toPromise();
      
      
      this.storage.remove('auth');
    }
  
    
    storeCredentials (response: any) {
  
      this.storage.set('auth', {
        access_token: response.access_token,
        expires_at: response.expires_at
      })
    }




}
