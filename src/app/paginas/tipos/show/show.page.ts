import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TiposService} from 'src/app/servicios/tipos.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Tipo } from 'src/app/interfaces/Tipos.interface';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/servicios/loading.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})


export class ShowPage implements OnInit {
  constructor(
    private tipoService: TiposService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadserv: LoadingService
    ) { }
    

  //tipo : Observable<Tipo>;
  tipo : Tipo;
  id: string = this.activateRoute.snapshot.paramMap.get('tipoid');

  ngOnInit() {

  }



  ionViewWillEnter() {
    this.mostrarloading();
    this.show();
  }
  

  show(){
    
    /* this.tipo = this.tipoService.getTipo(this.id);
    console.log(this.tipo); */
    
    this.tipoService.getTipo(this.id).subscribe(res=>{
      console.log(res);
      this.tipo = res;
      this.loadserv.loading.dismiss();
    });
  }


  mostrarloading(){
    this.loadserv.presentLoading('Cargando');
  }
  

  //ionViewDidEnter(){this.show();}
  //ionViewWillLeave(){this.show();}
  //ionViewDidLeave(){this.show();}



}