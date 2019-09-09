import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductoes().subscribe((productoArray: Producto[])=>{
      this.productoArray = productoArray;
      console.log(this.productoArray);
    })
  }

  productoArray: Producto[];
  selectedProducto: Producto = new Producto();

  addOrEdit(){

    if (this.selectedProducto.prodCodigo == null){
      this.productoService.crearProducto(this.selectedProducto).subscribe((producto: Producto)=>{
        console.log("Producto created, ", producto);
        this.productoArray.push(producto);
      });
      
    }else{

      this.productoService.actualizarProducto(this.selectedProducto).subscribe((producto: Producto)=>{
        console.log("Producto actualizado" , producto);
      });
    }
    this.selectedProducto = new Producto();

  }

  limpiar(){
    this.selectedProducto = new Producto();
  }
  openForEdit(producto){
    this.selectedProducto = producto;
  }

}
