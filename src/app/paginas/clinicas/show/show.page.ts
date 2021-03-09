import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinica } from 'src/app/interfaces/Clinicas.interface';
import { ClinicasService } from 'src/app/servicios/clinicas.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  
  constructor(
    private service: ClinicasService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService) { }

    
  clinica: Clinica;
  id: string = this.activateRoute.snapshot.paramMap.get('clinicaid');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }
  


  show() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getClinica(this.id).subscribe((res) => {
            this.clinica = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }
  

  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }


}

