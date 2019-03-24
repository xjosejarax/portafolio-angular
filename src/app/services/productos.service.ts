import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-e3240.firebaseio.com/productos_idx.json')
    .subscribe( (res: Producto[]) =>{
      this.cargando = false;
      this.productos = res;
      console.log(res);
    })

  }
}
