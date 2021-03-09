import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesional } from 'src/app/interfaces/Profesionales.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { ProfesionalesService } from 'src/app/servicios/profesionales.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
 constructor(
    private service: ProfesionalesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
    ) { }

    
  profesional: Profesional;
  id: string = this.activateRoute.snapshot.paramMap.get('proid');
  

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }


  show(){
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getProfesional(this.id).subscribe((res) => {
            this.profesional = res;
            this.loadservi.loading.dismiss(); 
          });

      }
    })
  }


  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }

}

