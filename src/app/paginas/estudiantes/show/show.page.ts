import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/interfaces/Estudiantes.interface';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  constructor(
    private service: EstudiantesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
    ) { }

    
  estudiante: Estudiante;
  id: string = this.activateRoute.snapshot.paramMap.get('id');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }

  show() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getEs(this.id).subscribe((res) => {
            this.estudiante = res;
            this.loadservi.loading.dismiss(); 
          });

      }
    })
  }


  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }

}
