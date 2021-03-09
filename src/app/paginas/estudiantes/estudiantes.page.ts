import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Estudiante } from 'src/app/interfaces/Estudiantes.interface';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  
  constructor(
    public http : HttpClient,
    private service : EstudiantesService,
    private alertController :AlertController,
    private loadservi: LoadingService
  ) { }

  
  estudiante : Estudiante[];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getEs();
  }
  

  getEs(){

    this.service.getEss().subscribe(resp => {
      console.log(resp.data); 
      this.estudiante = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteEs(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteEs(id).subscribe(
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
