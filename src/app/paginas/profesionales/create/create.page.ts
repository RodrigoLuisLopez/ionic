import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesional } from 'src/app/interfaces/Profesionales.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { ProfesionalesService} from 'src/app/servicios/profesionales.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: ProfesionalesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }

  editing = false;
  profesional: Profesional = {};
  
  id: string = this.activateRoute.snapshot.paramMap.get('proid');

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
        this.service.getProfesional(this.id).subscribe((res) => {
            this.profesional = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }

  saveProfesional() {
    this.service.createProfesional(this.profesional).subscribe(
      (resp) => {
        this.router.navigate(['/profesionales']);
      },
      (err) => console.error(err)
    );
  }

  updateProfesional() {
    this.service.updateProfesional(this.profesional.id,this.profesional).subscribe(
      (resp) => { this.router.navigate(['/profesionales']) },
      (err) => console.error(err)
    );
  }

  
  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }

}
