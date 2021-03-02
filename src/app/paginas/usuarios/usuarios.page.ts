import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  ionViewWillEnter(){
    this.getUsuarios();
  }
  
  usuarios : any=[];

  getUsuarios(){

    this.service.getUsuarios().subscribe(resp => {console.log(resp.data); this.usuarios = resp.data;});
  }


  async deleteUsuarios(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteUsuario(id).subscribe(
            (resp) => {
              this.getUsuarios();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
