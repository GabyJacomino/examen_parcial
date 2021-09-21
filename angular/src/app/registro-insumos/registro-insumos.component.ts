import { Component, OnInit } from '@angular/core';
import { Insumos } from '../modelos/insumos';
import { InsumoService } from '../servicios/insumo.service';

@Component({
  selector: 'app-registro-insumos',
  templateUrl: './registro-insumos.component.html',
  styleUrls: ['./registro-insumos.component.css']
})
export class RegistroInsumosComponent implements OnInit {
  insumo!:Insumos;
  constructor(private insumoservice:InsumoService) { }

  ngOnInit(): void {
    this.insumo=new Insumos;
  }
  add(){

    this.insumoservice.post(this.insumo);
    alert('Se agrego un nuevo insumo');
  }

}
