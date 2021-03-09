import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TiposService } from 'src/app/servicios/tipos.service';
import { AlertController } from '@ionic/angular';
import { Tipo } from 'src/app/interfaces/Tipos.interface';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {

  constructor(
    public http: HttpClient,
    private tipoService: TiposService,
    private alertController: AlertController,
    private loadservi: LoadingService
  ) { }

  tipos: Tipo[];


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarloading();
    this.index();
  }


  index() {
    this.tipoService.getTipos().subscribe(resp => { 
      console.log(resp.data); 
      this.tipos = resp.data;
      this.loadservi.loading.dismiss(); 
    });
  }

  async deleteTipo(id: string) {

    const alert = await this.alertController.create({
      header: "Eliminar",
      //subHeader: " Eliminar este tipo",
      message: "¿Estas seguro de eliminar este Tipo?",
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.tipoService.deleteTipo(id).subscribe(
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



  //ionViewWillLeave(){this.show();}
}
