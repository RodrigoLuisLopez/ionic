import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasosService } from 'src/app/servicios/casos.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  caso: any =[];
  

  constructor(
    private service: CasosService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.service
          .getca(paramMap.get('id'))
          .subscribe((res) => {
            this.caso = res.data;
          });

      }
    })
  }
}
