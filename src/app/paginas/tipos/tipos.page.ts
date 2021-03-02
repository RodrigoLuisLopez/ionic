import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TiposService } from 'src/app/servicios/tipos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {

  constructor(
    public http : HttpClient,
    private tipoService : TiposService,
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getTipos();
  }

  ionViewWillEnter(){
    this.getTipos();
  }
  
  tipos : any=[];

  getTipos(){

    this.tipoService.getTipos().subscribe(resp => {console.log(resp.data); this.tipos = resp.data;});
  }

  async deleteTipo(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar este Tipo?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.tipoService.deleteTipo(id).subscribe(
            (resp) => {
              this.getTipos();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
