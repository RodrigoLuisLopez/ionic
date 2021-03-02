import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TiposService, Tipo } from 'src/app/servicios/tipos.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})

export class ShowPage implements OnInit {

  tipo: any =[];
  

  constructor(
    private tipoService: TiposService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('tipoid')) {
        this.tipoService
          .getTipo(paramMap.get('tipoid'))
          .subscribe((res) => {
            this.tipo = res.data;
          });

      }
    })
  }


}
