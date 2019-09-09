import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../model/vendedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  PATH_API_VENDEDOR = "http://127.0.0.1:8080/api/Vendedor";

  constructor(private httpClient: HttpClient) { }

  getVendedores(): Observable<Vendedor[]>{
    return this.httpClient.get<Vendedor[]>(`${this.PATH_API_VENDEDOR}`);
  }

  crearVendedor(vendedor: Vendedor): Observable<Vendedor>{
    return this.httpClient.post<Vendedor>(`${this.PATH_API_VENDEDOR}`, vendedor);
  }

  actualizarVendedor(vendedor: Vendedor){
    return this.httpClient.put<Vendedor>(`${this.PATH_API_VENDEDOR}/${vendedor.vendId}`, vendedor);   
  }

  eliminarVendedor(vendId: number){
    return this.httpClient.delete<Vendedor>(`${this.PATH_API_VENDEDOR}/${vendId}`);
  }
}
