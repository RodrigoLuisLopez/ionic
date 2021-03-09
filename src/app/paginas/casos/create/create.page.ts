import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caso } from 'src/app/interfaces/Casos.interface';
import { CasosService} from 'src/app/servicios/casos.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: CasosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }

  
  
  editing = false;
  caso: Caso = { };
  id: string = this.activateRoute.snapshot.paramMap.get('id');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarLoading();
    this.verDatos();
  }

  verDatos() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.editing = true;
        this.service.getca(this.id).subscribe((res) => {
            this.caso = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }

  saveCa() {
    this.service.createCa(this.caso).subscribe(
      (resp) => {
        this.router.navigate(['/casos']);
      },
      (err) => console.error(err)
    );
  }

  updateCa() {
    this.service.updateCa(this.caso.id, this.caso).subscribe(
      (resp) => { this.router.navigate(['/casos']) },
      (err) => console.error(err)
    );
  }

  
  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }


}
