import { Injectable } from '@angular/core';
import { Insumos } from '../modelos/insumos';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor() {}
    post(insumo:Insumos){
      let insumos: Insumos[]=[]
      if(this.get()!= null){
        insumos=this.get();
      }
      insumos.push(insumo);
      localStorage.setItem('datos',JSON.stringify(insumos));
    }
    get():Insumos[]{
      return JSON.parse(localStorage.getItem('datos')||'[]');
    }

  }
