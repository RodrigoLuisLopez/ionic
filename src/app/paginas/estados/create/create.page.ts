import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadosService, Estado } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  
  editing = false;
  estado: Estado = {
    nombre: '',
    descripcion: ''
  }

  constructor(
    private service: EstadosService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('estadoid')) {
        this.editing = true;
        this.service
          .getEstado(paramMap.get('estadoid'))
          .subscribe((res) => {
            this.estado = res.data;
          });

      }
    })
  }

  saveEstado() {
    this.service.createEstado(this.estado.nombre, this.estado.descripcion).subscribe(
      (resp) => {
        this.router.navigate(['/estados']);
      },
      (err) => console.error(err)
    );
  }

  updateEstado() {
    this.service.updateEstado(this.estado.id, {
      nombre: this.estado.nombre,
      descripcion: this.estado.descripcion
    }).subscribe(
      (resp) => { this.router.navigate(['/estados']) },
      (err) => console.error(err)
    );
  }

}
