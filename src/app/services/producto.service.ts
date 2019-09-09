import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  PATH_API_Producto = "http://127.0.0.1:8080/api/Producto";

  constructor(private httpClient: HttpClient) { }

  getProductoes(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.PATH_API_Producto}`);
  }

  crearProducto(Producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.PATH_API_Producto}`, Producto);
  }

  actualizarProducto(Producto: Producto){
    return this.httpClient.put<Producto>(`${this.PATH_API_Producto}/${Producto.prodCodigo}`, Producto);   
  }

  eliminarProducto(prodCodigo: number){
    return this.httpClient.delete<Producto>(`${this.PATH_API_Producto}/${prodCodigo}`);
  }
}
