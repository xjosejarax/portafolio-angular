import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      this.productoService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) => {
        this.producto = producto;
        this.id = parametros['id'];
        // console.log(producto);
      });
      // https://angular-html-e3240.firebaseio.com/productos/prod-1.json
    });
  }

}
