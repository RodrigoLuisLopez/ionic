import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/interfaces/Estudiantes.interface';
import { EstudiantesService} from 'src/app/servicios/estudiantes.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: EstudiantesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }



  
  editing = false;
  estudiante: Estudiante = { };
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
        this.service.getEs(this.id).subscribe((res) => {
            this.estudiante = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }
  

  saveEs() {
    this.service.createEs( this.estudiante).subscribe(
      (resp) => {
        this.router.navigate(['/estudiantes']);
      },
      (err) => console.error(err)
    );
  }

  updateEs() {
    this.service.updateEs(this.estudiante.id, this.estudiante).subscribe(
      (resp) => { this.router.navigate(['/estudiantes']) },
      (err) => console.error(err)
    );
  }


  
  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }

}
