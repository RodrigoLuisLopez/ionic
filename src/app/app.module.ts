import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({


  declarations: [AppComponent,
    MenuComponent],




  exports: [MenuComponent],




  entryComponents: [],




  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot()  
  ],




  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],




  bootstrap: [AppComponent],



})
export class AppModule { }
