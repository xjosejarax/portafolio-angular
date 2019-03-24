import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;

  constructor( private http: HttpClient) {
    console.log('Servicio cargado');

    // Leer JSON
    this.http.get('assets/data/data-page.json')
    .subscribe( (res: InfoPage) =>{
      this.cargada = true;
      this.info = res;
      console.log( res );
    })

  }
}
