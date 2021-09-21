import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { RegistroInsumosComponent } from './registro-insumos/registro-insumos.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';
import { ContratoService } from './servicios/contrato.service';
import { FormsModule } from '@angular/forms';
import { TContratoComponent } from './componentes/t-contrato/t-contrato.component';
import { TInsumosComponent } from './t-insumos/t-insumos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistroInsumosComponent,
    RegistroContratoComponent,
    TContratoComponent,
    TInsumosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
