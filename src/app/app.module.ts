import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { AsesorComponent } from './asesor/asesor.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HistorialConsumoComponent } from './historial-consumo/historial-consumo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TarjetaComponent,
    ConsumoComponent,
    AsesorComponent,
    ListaClientesComponent,
    HistorialConsumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
