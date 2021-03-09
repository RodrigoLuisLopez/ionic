import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caso } from 'src/app/interfaces/Casos.interface';
import { CasosService } from 'src/app/servicios/casos.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  constructor(
    private service: CasosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService) { }

    
  caso: Caso;  
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
        this.service
          .getca(this.id)
          .subscribe((res) => {
            this.caso = res;
            this.loadservi.loading.dismiss(); 
          });

      }
    })
  }

  
  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }







}
