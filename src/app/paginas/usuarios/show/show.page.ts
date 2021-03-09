import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuarios.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  constructor(
    private service: UsuariosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService) { }



    usuario: Usuario;
    id: string = this.activateRoute.snapshot.paramMap.get('id');

    ngOnInit() {
    }
  
    ionViewWillEnter() {
      this.mostrarloading();
      this.show();
    }
  
  
    show() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.service.getUsuario(this.id).subscribe((res) => {
            this.usuario = res;
            this.loadservi.loading.dismiss(); 
          });

      }
    })
  }

  mostrarloading(){
    this.loadservi.presentLoading('Cargando');
  }

}
