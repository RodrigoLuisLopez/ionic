import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Estado } from 'src/app/interfaces/Estados.interface';
import { EstadosService } from 'src/app/servicios/estados.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
})
export class EstadosPage implements OnInit {
  constructor(
    public http : HttpClient,
    private service : EstadosService,
    private alertController :AlertController, 
    private loadservi: LoadingService
  ) { }

  estados : Estado[];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getEstados();
  }

  getEstados(){

    this.service.getEstados().subscribe(resp =>{
      console.log(resp.data); 
      this.estados = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteEstado(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteEstado(id).subscribe(
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
