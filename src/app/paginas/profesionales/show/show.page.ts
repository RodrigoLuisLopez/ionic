import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalesService } from 'src/app/servicios/profesionales.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  profesional: any =[];
  

  constructor(
    private service: ProfesionalesService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('proid')) {
        this.service
          .getProfesional(paramMap.get('proid'))
          .subscribe((res) => {
            this.profesional = res.data;
          });

      }
    })
  }


}

