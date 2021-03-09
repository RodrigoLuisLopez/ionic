import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Tipo } from 'src/app/interfaces/Tipos.interface';
import { BoletinesService } from 'src/app/servicios/boletines.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-boletines',
  templateUrl: './boletines.page.html',
  styleUrls: ['./boletines.page.scss'],
})
export class BoletinesPage implements OnInit {

  
  constructor(
    public http : HttpClient,
    private service : BoletinesService,
    private alertController :AlertController, 
    private loadservi: LoadingService
  ) { }

  
  boletines : Tipo[];

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mostrarloading();
    this.getBol();
  }
  

  getBol(){

    this.service.getBols().subscribe(resp => {
      console.log(resp.data); 
      this.boletines = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteBol(id){

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar?",
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.service.deleteBol(id).subscribe(
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
