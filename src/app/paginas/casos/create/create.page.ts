import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasosService, Caso } from 'src/app/servicios/casos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  editing = false;

  caso: Caso = {
  nombre: '',
  descripcion:'',
  fecha: '',
  c_profesional_id: '',
  t_usuario_id: '',
  c_estado_id: ''
  }

  constructor(
    private service: CasosService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editing = true;
        this.service
          .getca(paramMap.get('id'))
          .subscribe((res) => {
            this.caso = res.data;
          });

      }
    })
  }

  saveCa() {
    this.service.createCa(
      this.caso.nombre,
      this.caso.descripcion,
      this.caso.fecha,
      this.caso.c_profesional_id,
      this.caso.t_usuario_id,
      this.caso.c_estado_id).subscribe(
      (resp) => {
        this.router.navigate(['/casos']);
      },
      (err) => console.error(err)
    );
  }

  updateCa() {
    this.service.updateCa(this.caso.id, {
      nombre:this.caso.nombre,
      descripcion:this.caso.descripcion,
      fecha:this.caso.fecha,
      c_profesional_id:this.caso.c_profesional_id,
      t_usuario_id:this.caso.t_usuario_id,
      c_estado_id:this.caso.c_estado_id
    }).subscribe(
      (resp) => { this.router.navigate(['/casos']) },
      (err) => console.error(err)
    );
  }

}
