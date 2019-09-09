import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../model/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
    this.vendedorService.getVendedores().subscribe((vendedorArray: Vendedor[])=>{
      this.vendedorArray = vendedorArray;
      console.log(this.vendedorArray);
    })
  }

  vendedorArray: Vendedor[];
  selectedVendedor: Vendedor = new Vendedor();

  addOrEdit(){

    if (this.selectedVendedor.vendId == null){
        this.vendedorService.crearVendedor(this.selectedVendedor).subscribe((vendedor: Vendedor)=>{
          console.log("Vendedor created, ", vendedor);
          this.vendedorArray.push(vendedor);
        });
      
    }else{
      this.vendedorService.actualizarVendedor(this.selectedVendedor).subscribe((vendedor: Vendedor)=>{
        console.log("Vendedor actualizado" , vendedor);
      });
    }
    this.selectedVendedor = new Vendedor();


  }

  limpiar(){
    this.selectedVendedor = new Vendedor();
  }
  openForEdit(vendedor){
    this.selectedVendedor = vendedor;
  }
}
