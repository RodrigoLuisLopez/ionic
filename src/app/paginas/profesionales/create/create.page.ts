import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalesService, Profesional } from 'src/app/servicios/profesionales.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  editing = false;

  profesional: Profesional = {
    c_clinica_id: '',
    nombre: '',
    telefono: '',
    correo: '',
    localidad: ''
  }

  constructor(
    private service: ProfesionalesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('proid')) {
        this.editing = true;
        this.service
          .getProfesional(paramMap.get('proid'))
          .subscribe((res) => {
            this.profesional = res.data;
          });

      }
    })
  }

  saveProfesional() {
    this.service.createProfesional(this.profesional.c_clinica_id,
      this.profesional.nombre, 
      this.profesional.telefono,
      this.profesional.correo,
      this.profesional.localidad).subscribe(
      (resp) => {
        this.router.navigate(['/profesionales']);
      },
      (err) => console.error(err)
    );
  }

  updateProfesional() {
    this.service.updateProfesional(this.profesional.id, {
      c_clinica_id:this.profesional.c_clinica_id,
      nombre:this.profesional.nombre, 
      telefono:this.profesional.telefono,
      correo:this.profesional.correo,
      localidad:this.profesional.localidad
    }).subscribe(
      (resp) => { this.router.navigate(['/profesionales']) },
      (err) => console.error(err)
    );
  }

}
