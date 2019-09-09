import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService,) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe((clienteArray: Cliente[])=>{
      this.clienteArray = clienteArray;
      console.log(this.clienteArray);
    })
  }

  clienteArray: Cliente[];

  selectedCliente: Cliente = new Cliente();

  addOrEdit(){

    if (this.selectedCliente.clieId == null){
      this.clienteService.crearCliente(this.selectedCliente).subscribe((Cliente: Cliente)=>{
        console.log("Cliente created, ", Cliente);
        this.clienteArray.push(Cliente);
      });
      
    }else{

      this.clienteService.actualizarCliente(this.selectedCliente).subscribe((Cliente: Cliente)=>{
        console.log("Cliente actualizado" , Cliente);
      });
    }
    this.selectedCliente = new Cliente();

  }

  limpiar(){
    this.selectedCliente = new Cliente();
  }
  openForEdit(Cliente){
    this.selectedCliente = Cliente;
  }
}
