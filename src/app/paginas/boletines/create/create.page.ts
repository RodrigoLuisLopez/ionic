import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boletin } from 'src/app/interfaces/Boletines.interface';
import { BoletinesService} from 'src/app/servicios/boletines.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(
    private service: BoletinesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loadservice: LoadingService
  ) { }

    
  editing = false;
  boletin: Boletin = {};
  id: string = this.activateRoute.snapshot.paramMap.get('id');


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mostrarLoading();
    this.verdatos();
  }

  verdatos(){
    
    this.activateRoute.paramMap.subscribe((paramMap) => {
      if (this.id) {
        this.editing = true;
        this.service.getBol(this.id).subscribe((res) => {
            this.boletin = res;
            this.loadservice.loading.dismiss();
          });

      }
    })

  }

  saveBol() {
    this.service.createBol(this.boletin).subscribe(
      (resp) => {
        this.router.navigate(['/boletines']);
      },
      (err) => console.error(err)
    );
  }

  updateBol() {
    this.service.updateBol(this.boletin.id, this.boletin).subscribe(
      (resp) => { this.router.navigate(['/boletines']) },
      (err) => console.error(err)
    );
  }

  mostrarLoading(){
    if(this.id){
      this.loadservice.presentLoading('Cargando');
    }
  }

}
