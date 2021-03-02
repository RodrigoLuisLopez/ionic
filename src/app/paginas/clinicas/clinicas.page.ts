import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClinicasService } from 'src/app/servicios/clinicas.service';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {

  
  constructor(
    public http : HttpClient,
    private service : ClinicasService,
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getClinicas();
  }

  ionViewWillEnter(){
    this.getClinicas();
  }
  
  clinicas : any=[];

  getClinicas(){

    this.service.getClinicas().subscribe(resp => {console.log(resp.data); this.clinicas = resp.data;});
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
              this.getClinicas();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
