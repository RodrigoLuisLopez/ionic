import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/Usuarios.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService } from 'src/app/servicios/Usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(
    public http : HttpClient,
    private service : UsuariosService,
    private alertController :AlertController,
    private loadservi: LoadingService
  ) { }

  
  usuarios : Usuario[];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getUsuarios();
  }
  

  getUsuarios(){
    this.service.getUsuarios().subscribe(resp => {
      console.log(resp.data); 
      this.usuarios = resp.data;
      this.loadservi.loading.dismiss(); 

    });

  }


  async deleteUsuario(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteUsuario(id).subscribe(
            (resp) => {
              this.ionViewWillEnter();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }


  
  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }

}
