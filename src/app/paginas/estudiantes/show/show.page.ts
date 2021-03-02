import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante, EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  es: any =[];
  

  constructor(
    private service: EstudiantesService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.service
          .getEs(paramMap.get('id'))
          .subscribe((res) => {
            this.es = res.data;
          });

      }
    })
  }


}
