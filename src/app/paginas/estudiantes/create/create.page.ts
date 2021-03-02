import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService, Estudiante } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  editing = false;

  estudiante: Estudiante = {
  c_clinica_id: '',
  c_profesional_id: '',
  nombre: '',
  telefono: '',
  correo: '',
  localidad: ''
  }

  constructor(
    private service: EstudiantesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editing = true;
        this.service
          .getEs(paramMap.get('id'))
          .subscribe((res) => {
            this.estudiante = res.data;
          });

      }
    })
  }

  saveEs() {
    this.service.createEs(
      this.estudiante.c_clinica_id,
      this.estudiante.c_profesional_id,
      this.estudiante.nombre, 
      this.estudiante.telefono,
      this.estudiante.correo,
      this.estudiante.localidad).subscribe(
      (resp) => {
        this.router.navigate(['/estudiantes']);
      },
      (err) => console.error(err)
    );
  }

  updateEs() {
    this.service.updateEs(this.estudiante.id, {
      c_clinica_id:this.estudiante.c_clinica_id,
      c_profesional_id:this.estudiante.c_profesional_id,
      nombre:this.estudiante.nombre, 
      telefono:this.estudiante.telefono,
      correo:this.estudiante.correo,
      localidad:this.estudiante.localidad
    }).subscribe(
      (resp) => { this.router.navigate(['/estudiantes']) },
      (err) => console.error(err)
    );
  }

}
