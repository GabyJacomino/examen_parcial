import { Component, OnInit } from '@angular/core';
import { Insumos } from '../modelos/insumos';
import { InsumoService } from '../servicios/insumo.service';

@Component({
  selector: 'app-t-insumos',
  templateUrl: './t-insumos.component.html',
  styleUrls: ['./t-insumos.component.css']
})
export class TInsumosComponent implements OnInit {
  insumos!: Insumos[];
  constructor(private insumosservice:InsumoService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
  this.insumos=this.insumosservice.get();
}
}
