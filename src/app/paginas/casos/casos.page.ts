import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CasosService } from 'src/app/servicios/casos.service';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  
  constructor(
    public http : HttpClient,
    private service : CasosService,
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getCa();
  }

  ionViewWillEnter(){
    this.getCa();
  }
  
  casos : any=[];

  getCa(){

    this.service.getCas().subscribe(resp => {console.log(resp.data); this.casos = resp.data;});
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
              this.getCa();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
