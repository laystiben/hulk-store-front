import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes= [
  { path: '', component: AppComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'movimiento', component: MovimientoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VendedorComponent,
    ProductoComponent,
    ClienteComponent,
    MovimientoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
