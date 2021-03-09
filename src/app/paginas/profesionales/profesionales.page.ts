import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Profesional } from 'src/app/interfaces/Profesionales.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { ProfesionalesService } from 'src/app/servicios/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.page.html',
  styleUrls: ['./profesionales.page.scss'],
})
export class ProfesionalesPage implements OnInit {
  constructor(
    public http : HttpClient,
    private service : ProfesionalesService,
    private alertController :AlertController,
    private loadservi: LoadingService
  ) { }

  
  profesionals : Profesional[];
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getProfesionals();
  }
  

  getProfesionals(){

    this.service.getProfesionals().subscribe(resp => {
      console.log(resp.data); 
      this.profesionals = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteProfesional(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteProfesional(id).subscribe(
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
