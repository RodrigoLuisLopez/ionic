import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletinesService } from 'src/app/servicios/boletines.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  
  boletin: any =[];
  

  constructor(
    private service: BoletinesService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.service
          .getBol(paramMap.get('id'))
          .subscribe((res) => {
            this.boletin = res.data;
          });

      }
    })
  }
}