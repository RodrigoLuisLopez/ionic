import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Caso } from 'src/app/interfaces/Casos.interface';
import { CasosService } from 'src/app/servicios/casos.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  casos : Caso[];

  constructor(
    public http : HttpClient,
    private service : CasosService,
    private alertController :AlertController, 
    private loadservi: LoadingService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getCa();
  }
  

  getCa(){

    this.service.getCas().subscribe(resp => {
      console.log(resp.data); 
      this.casos = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  
  }

  async deleteCa(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteCa(id).subscribe(
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
