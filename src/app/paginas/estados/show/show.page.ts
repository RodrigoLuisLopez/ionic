import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadosService } from 'src/app/servicios/estados.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  estado: any =[];
  

  constructor(
    private service: EstadosService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('estadoid')) {
        this.service
          .getEstado(paramMap.get('estadoid'))
          .subscribe((res) => {
            this.estado = res.data;
          });

      }
    })
  }


}
