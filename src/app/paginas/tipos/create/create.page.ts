import { Component, OnInit } from '@angular/core';
import { TiposService, Tipo } from 'src/app/servicios/tipos.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  editing = false;
  tipo: Tipo = {
    nombre: '',
    descripcion: ''
  }

  constructor(
    private tipoService: TiposService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('tipoid')) {
        this.editing = true;
        this.tipoService
          .getTipo(paramMap.get('tipoid'))
          .subscribe((res) => {
            this.tipo = res.data;
          });

      }
    })
  }

  saveTipo() {
    this.tipoService.createTipo(this.tipo.nombre, this.tipo.descripcion).subscribe(
      (resp) => {
        this.router.navigate(['/tipos']);
      },
      (err) => console.error(err)
    );
  }

  updateTipo() {
    this.tipoService.updateTipo(this.tipo.id, {
      nombre: this.tipo.nombre,
      descripcion: this.tipo.descripcion
    }).subscribe(
      (resp) => { this.router.navigate(['/tipos']) },
      (err) => console.error(err)
    );
  }

}
