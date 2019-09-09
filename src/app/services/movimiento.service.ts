import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../model/movimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  PATH_API_Movimiento = "http://127.0.0.1:8080/api/Movimiento";

  constructor(private httpClient: HttpClient) { }

  getMovimiento(moviConsecutivo: number): Observable<Movimiento>{
    return this.httpClient.get<Movimiento>(`${this.PATH_API_Movimiento}/${moviConsecutivo}`);
  }

  crearMovimiento(Movimiento: Movimiento): Observable<Movimiento>{
    return this.httpClient.post<Movimiento>(`${this.PATH_API_Movimiento}`, Movimiento);
  }

  actualizarMovimiento(Movimiento: Movimiento){
    return this.httpClient.put<Movimiento>(`${this.PATH_API_Movimiento}/${Movimiento.moviConsecutivo}`, Movimiento);   
  }

  eliminarMovimiento(prodCodigo: number){
    return this.httpClient.delete<Movimiento>(`${this.PATH_API_Movimiento}/${prodCodigo}`);
  }
}
