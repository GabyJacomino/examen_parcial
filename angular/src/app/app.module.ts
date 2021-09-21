import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { RegistroInsumosComponent } from './registro-insumos/registro-insumos.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistroInsumosComponent,
    RegistroContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
