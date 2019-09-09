import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../services/movimiento.service';
import { VendedorService } from '../services/vendedor.service';
import { ProductoService } from '../services/producto.service';
import { ClienteService } from '../services/cliente.service';
import { Vendedor } from '../model/vendedor';
import { Producto } from '../model/producto';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
  
  vendedorArray: Vendedor[];
  selectedVendedor: Vendedor;
  productoArray: Producto[];
  cliente: Cliente;


  constructor(private movimientoService: MovimientoService,
    private vendedorService: VendedorService,
    private productoService: ProductoService,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.vendedorService.getVendedores().subscribe((vendedorArray: Vendedor[])=>{
      this.vendedorArray = vendedorArray;
      console.log(this.vendedorArray);
    })


  }

}
