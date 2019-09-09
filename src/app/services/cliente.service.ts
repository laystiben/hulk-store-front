import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  PATH_API_Cliente = "http://127.0.0.1:8080/api/Cliente";

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.PATH_API_Cliente}`);
  }

  crearCliente(Cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(`${this.PATH_API_Cliente}`, Cliente);
  }

  actualizarCliente(Cliente: Cliente){
    return this.httpClient.put<Cliente>(`${this.PATH_API_Cliente}/${Cliente.clieId}`, Cliente);   
  }

  eliminarCliente(clieId: string){
    return this.httpClient.delete<Cliente>(`${this.PATH_API_Cliente}/${clieId}`);
  }
}
