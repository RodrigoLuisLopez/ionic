import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinica } from 'src/app/interfaces/Clinicas.interface';
import { ClinicasService} from 'src/app/servicios/clinicas.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: ClinicasService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }

  
  editing = false;
  clinica: Clinica = {};
  id: string = this.activateRoute.snapshot.paramMap.get('clinicaid');

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
        this.service.getClinica(this.id).subscribe((res) => {
            this.clinica = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }

  saveClinica() {
    this.service.createClinica(this.clinica).subscribe(
      (resp) => {
        this.router.navigate(['/clinicas']);
      },
      (err) => console.error(err)
    );
  }

  updateClinica() {
    this.service.updateClinica(this.clinica.id, this.clinica).subscribe(
      (resp) => { this.router.navigate(['/clinicas']) },
      (err) => console.error(err)
    );
  }


  
  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }

}
