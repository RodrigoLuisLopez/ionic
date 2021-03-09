import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuarios.interface';
import { LoadingService } from 'src/app/servicios/loading.service';
import { UsuariosService} from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  
  constructor(
    private service: UsuariosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservi: LoadingService
  ) { }


  editing = false;
  usuario: Usuario = {};
  id: string = this.activateRoute.snapshot.paramMap.get('id');

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarLoading();
    this.verDatos();
  }


  verDatos() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.editing = true;
        this.service.getUsuario(this.id).subscribe((res) => {
            this.usuario = res;
            this.loadservi.loading.dismiss();
          });

      }
    })
  }

  saveUsuario() {
    this.service.createUsuario(this.usuario).subscribe(
      (resp) => {
        this.router.navigate(['/usuarios']);
      },
      (err) => console.error(err)
    );
  }

  updateUsuario() {
    this.service.updateUsuario(this.usuario.id, this.usuario).subscribe(
      (resp) => { this.router.navigate(['/usuarios']) },
      (err) => console.error(err)
    );
  }



  mostrarLoading(){
    if(this.id){
      this.loadservi.presentLoading('Cargando');
    }
  }



}
