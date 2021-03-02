import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicasService } from 'src/app/servicios/clinicas.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  
  clinica: any =[];
  

  constructor(
    private service: ClinicasService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('clinicaid')) {
        this.service
          .getClinica(paramMap.get('clinicaid'))
          .subscribe((res) => {
            this.clinica = res.data;
          });

      }
    })
  }


}

