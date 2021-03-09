import { Component, OnInit } from '@angular/core';
import { TiposService} from 'src/app/servicios/tipos.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Tipo } from 'src/app/interfaces/Tipos.interface';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private tipoService: TiposService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservice: LoadingService
  ) { }

    
  editing = false;
  tipo : Tipo={};
  id: string = this.activateRoute.snapshot.paramMap.get('tipoid');

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
        this.tipoService.getTipo(this.id).subscribe((res) => {
            this.tipo = res;
            this.loadservice.loading.dismiss();
          });
      }
    })
  }

  saveTipo() {
    this.tipoService.createTipo(this.tipo).subscribe((resp) => 
    {this.router.navigate(['/tipos']);},
    (err) => console.error(err)
    );
  }

  updateTipo() {
    this.tipoService.updateTipo(this.tipo.id , this.tipo).subscribe((resp) => 
    { this.router.navigate(['/tipos']);},
    (err) => console.error(err)
    );

  }

  mostrarLoading(){
    if(this.id){
      this.loadservice.presentLoading('Cargando');
    }
  }


  










}
