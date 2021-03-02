import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicasService, Clinica } from 'src/app/servicios/clinicas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  editing = false;
  clinica: Clinica = {
    nombre: '',
    direccion: '',
    telefono: '',
    correo: ''
  }

  constructor(
    private service: ClinicasService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('clinicaid')) {
        this.editing = true;
        this.service
          .getClinica(paramMap.get('clinicaid'))
          .subscribe((res) => {
            this.clinica = res.data;
          });

      }
    })
  }

  saveClinica() {
    this.service.createClinica(this.clinica.nombre, 
      this.clinica.direccion,
      this.clinica.telefono,
      this.clinica.correo).subscribe(
      (resp) => {
        this.router.navigate(['/clinicas']);
      },
      (err) => console.error(err)
    );
  }

  updateClinica() {
    this.service.updateClinica(this.clinica.id, {
      nombre: this.clinica.nombre,
      direccion: this.clinica.direccion,
      telefono: this.clinica.telefono,
      correo: this.clinica.correo
    }).subscribe(
      (resp) => { this.router.navigate(['/clinicas']) },
      (err) => console.error(err)
    );
  }

}
