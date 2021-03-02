import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {


  usuario: any =[];
  

  constructor(
    private service: UsuariosService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.service
          .getUsuario(paramMap.get('id'))
          .subscribe((res) => {
            this.usuario = res.data;
          });

      }
    })
  }


}
