import { Component } from '@angular/core';
import { Persona } from '../contribuyenteModel';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor() {}
  /** EJERCICIO 1 - Mostrar datos en pantalla y por evento click en consola **/
  products = products;

  mostrarPorConsola() {
    this.products = products;
    //this.products = [];  Si usamos esta linea de codigo se vacia el contenido del array del modelo, queda vacio
    console.log(products);
  }
  /** EJERCICIO 2 - Mostrar segun estado Booleano el contenido de product **/
  lista: any[] = Persona;
  transaccion = false;

  mostrarPorEventoDeBoton() {
    this.transaccion = true;
  }

  share() {
    window.alert('The product has been shared!');
  }
}
