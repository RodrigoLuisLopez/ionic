import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/interfaces/Estados.interface';
import { EstadosService } from 'src/app/servicios/estados.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  constructor(
    private service: EstadosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
    ) { }

    
  estado: Estado;
  id: string = this.activateRoute.snapshot.paramMap.get('estadoid');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }


  show(){
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getEstado(this.id).subscribe((res) => {
            this.estado = res;
            this.loadservi.loading.dismiss(); 
          });

      }
    })
   
  }


  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }


}
