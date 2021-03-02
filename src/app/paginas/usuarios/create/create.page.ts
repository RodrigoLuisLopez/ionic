import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService, Usuario } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  editing = false;

  usuario: Usuario = {
    c_tipo_id: '',
    nombre: '',
    edad: '',
    localidad: ''
  }

  constructor(
    private service: UsuariosService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editing = true;
        this.service
          .getUsuario(paramMap.get('id'))
          .subscribe((res) => {
            this.usuario = res.data;
          });

      }
    })
  }

  saveUsuario() {
    this.service.createUsuario(
      this.usuario.c_tipo_id,
      this.usuario.nombre, 
      this.usuario.edad,
      this.usuario.localidad
      ).subscribe(
      (resp) => {
        this.router.navigate(['/usuarios']);
      },
      (err) => console.error(err)
    );
  }

  updateUsuario() {
    this.service.updateUsuario(this.usuario.id, {
      c_tipo_id:this.usuario.c_tipo_id,
      nombre:this.usuario.nombre, 
      edad:this.usuario.edad,
      localidad:this.usuario.localidad
    }).subscribe(
      (resp) => { this.router.navigate(['/usuarios']) },
      (err) => console.error(err)
    );
  }

}
