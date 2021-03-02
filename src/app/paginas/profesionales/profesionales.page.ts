import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertController :AlertController
  ) { }

  ngOnInit() {
    this.getProfesionals();
  }

  ionViewWillEnter(){
    this.getProfesionals();
  }
  
  profesionals : any=[];

  getProfesionals(){

    this.service.getProfesionals().subscribe(resp => {console.log(resp.data); this.profesionals = resp.data;});
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
              this.getProfesionals();
            }, 
            (err) => console.error(err)
            );
        }
      }, 'Cancelar']

    });

    await alert.present();
  }

}
