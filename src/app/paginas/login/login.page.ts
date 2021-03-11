import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { empty } from 'rxjs';
import { UserCreate, UserLogin } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usercreate: UserCreate = {};
  userlogin: UserLogin = {};
  registrarse = false;


  constructor(
    private alertctrl:AlertController ,
    private service: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }



  ngOnInit() {
  }

  
  ionViewWillEnter() {
    //this.mostrarLoading();
    this.registrarse = false;
    this.checkAuthenticated();
  }


  ionViewDidEnter() {
  }

  ionViewWillLeave() {
    this.userlogin.password = "" ;
    this.userlogin.email = "" ;
  }


  async checkAuthenticated () 
  {
    try {
      let isAuthenticated = await this.service.checkIsAuthenticated();
      if ( isAuthenticated ) {
        this.router.navigate(['/inicio']);
      }
    } 
    catch (err) {
      console.log(err);
    }
    
  }



  crear() {
    
    if (this.usercreate.password == this.usercreate.password_confirmation) {
     
    this.mostrarLoading();

    this.service.signup(this.usercreate)
      .then((resp) => {
        console.log(resp);
        this.userlogin.email = this.usercreate.email;
        this.userlogin.password = this.usercreate.password;
        this.loadservi.loading.dismiss();
        this.login();
      })
      .catch((resp) => {
        console.log(resp);
        this.loadservi.loading.dismiss();
        this.presentAlert('Error', 'Verifique su información e intente de nuevo por favor');
      })

    }
    else{
      
      this.presentAlert('Contraseña Invalida', 'Las contraseñas no coinciden. Intente de nuevo por favor');
    }



  }





  login() {
     
    this.mostrarLoading();

    this.service.login(this.userlogin)
      .then((resp) => {
        console.log(resp);
        this.service.storeCredentials(resp);

        setTimeout(() =>{this.checkAuthenticated();}, 750);
        
        this.loadservi.loading.dismiss();
      })

      .catch((resp) => {
        console.log(resp);
        this.loadservi.loading.dismiss();
        this.presentAlert('Error', 'Verifique su información e intente de nuevo por favor');
      })

  }


















  async presentAlert(header:string, message:string) {
    const alert = await this.alertctrl.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  mostrarLoading(){
      this.loadservi.presentLoading('Cargando');
  }

}
