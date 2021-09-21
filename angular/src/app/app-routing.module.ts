import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TContratoComponent } from './componentes/t-contrato/t-contrato.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';
import { RegistroInsumosComponent } from './registro-insumos/registro-insumos.component';
import { TInsumosComponent } from './t-insumos/t-insumos.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'registro-contrato', component:RegistroContratoComponent},
  {path:'t-contrato', component:TContratoComponent},
  {path:'t-insumos', component:TInsumosComponent},
  {path:'registro-insumos', component:RegistroInsumosComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
