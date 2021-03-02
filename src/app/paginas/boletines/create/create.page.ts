import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletinesService, Boletin } from 'src/app/servicios/boletines.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  editing = false;

  boletin: Boletin = {
    c_profesional_id: '',
    titulo: '',
    subtitulo: '',
    contenido: '',
    autor: '',
  }

  constructor(
    private service: BoletinesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editing = true;
        this.service
          .getBol(paramMap.get('id'))
          .subscribe((res) => {
            this.boletin = res.data;
          });

      }
    })
  }

  saveBol() {
    this.service.createBol(
      this.boletin.c_profesional_id,
      this.boletin.titulo, 
      this.boletin.subtitulo,
      this.boletin.contenido,
      this.boletin.autor).subscribe(
      (resp) => {
        this.router.navigate(['/boletines']);
      },
      (err) => console.error(err)
    );
  }

  updateBol() {
    this.service.updateBol(this.boletin.id, {
      c_profesional_id:this.boletin.c_profesional_id,
      titulo:this.boletin.titulo, 
      subtitulo:this.boletin.subtitulo,
      contenido:this.boletin.contenido,
      autor:this.boletin.autor
    }).subscribe(
      (resp) => { this.router.navigate(['/boletines']) },
      (err) => console.error(err)
    );
  }

}
