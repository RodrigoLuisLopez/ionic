import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: HTMLIonLoadingElement;
  
  constructor(
    private loadingctrl: LoadingController
  ) { }


  
  async presentLoading(message:string) {

    this.loading = await this.loadingctrl.create({
      message,
    });
    await this.loading.present();

  }



}
