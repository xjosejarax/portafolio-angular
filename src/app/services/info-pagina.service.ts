import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
   this.cargarInfo();
   this.cargarEquipo();
  }

  cargarInfo(){
    // Leer JSON
    this.http.get('assets/data/data-page.json')
    .subscribe( (res: InfoPage) =>{
      this.cargada = true;
      this.info = res;
    });

  }

  cargarEquipo(){
    // Leer Firebase
    this.http.get('https://angular-html-e3240.firebaseio.com/equipo.json')
    .subscribe( (res: any[]) =>{
      this.cargada = true;
      this.equipo = res;
      console.log( res );
    });

  }
}
