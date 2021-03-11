import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User, UserCreate, UserLogin } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private alertctrl:AlertController ,
    private service: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }

  
  user: User;

  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }

  show() {

      this.service.getuser()
      .then((res: any) => {
        this.loadservi.loading.dismiss(); 
        this.user = res;
        //console.log(this.user);
      })
      .catch(err => {
        this.loadservi.loading.dismiss(); 
        this.presentAlert('Error', 'Verifique su información e intente de nuevo por favor');
      })

  }

  async salir(){
    
    await this.service.removeCredentials();
    
    this.router.navigate(['/login']);
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

  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }


}
