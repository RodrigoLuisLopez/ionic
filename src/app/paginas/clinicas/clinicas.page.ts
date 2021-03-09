import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Clinica } from 'src/app/interfaces/Clinicas.interface';
import { ClinicasService } from 'src/app/servicios/clinicas.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {
  constructor(
    public http : HttpClient,
    private service : ClinicasService,
    private alertController :AlertController,
    private loadservi: LoadingService
  ) { }

  
  clinicas : Clinica[];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getClinicas();
  }
  

  getClinicas(){

    this.service.getClinicas().subscribe(resp => {
      console.log(resp.data); 
      this.clinicas = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteClinica(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteClinica(id).subscribe(
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
