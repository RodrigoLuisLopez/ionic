import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  
  constructor(
    public http : HttpClient,
    private service : EstudiantesService,
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getEs();
  }

  ionViewWillEnter(){
    this.getEs();
  }
  
  es : any=[];

  getEs(){

    this.service.getEss().subscribe(resp => {console.log(resp.data); this.es = resp.data;});
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
              this.getEs();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
