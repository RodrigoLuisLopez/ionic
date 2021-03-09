import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boletin } from 'src/app/interfaces/Boletines.interface';
import { BoletinesService } from 'src/app/servicios/boletines.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  
  constructor(
    private service: BoletinesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadserv: LoadingService) { }

  boletin: Boletin;
  id: string = this.activateRoute.snapshot.paramMap.get('id');


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.show();
    this.mostrarloading();
  }


  show(){
    
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getBol(this.id).subscribe((res) => {
            this.boletin = res;
            this.loadserv.loading.dismiss();
          });

      }
    })

  }

  mostrarloading(){
    this.loadserv.presentLoading('Cargando');
  }
 



}