import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/interfaces/Estados.interface';
import { EstadosService} from 'src/app/servicios/estados.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: EstadosService,
    private router: Router,
    private activateRoute: ActivatedRoute, 
    private loadservi: LoadingService
  ) { }

  
  
  editing = false;
  estado: Estado = { };
  id: string = this.activateRoute.snapshot.paramMap.get('estadoid');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarLoading();
    this.verDatos();
  }


  verDatos(){

    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.editing = true;
        this.service.getEstado(this.id).subscribe((res) => {
            this.estado = res;
            this.loadservi.loading.dismiss();
          });

      }
    })

  }

  saveEstado() {
    this.service.createEstado(this.estado).subscribe(
      (resp) => {
        this.router.navigate(['/estados']);
      },
      (err) => console.error(err)
    );
  }

  updateEstado() {
    this.service.updateEstado(this.estado.id, this.estado).subscribe(
      (resp) => { this.router.navigate(['/estados']) },
      (err) => console.error(err)
    );
  }

  
  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }

}
