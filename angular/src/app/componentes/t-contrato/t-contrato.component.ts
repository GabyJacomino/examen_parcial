import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/modelos/contrato';
import { ContratoService } from 'src/app/servicios/contrato.service';


@Component({
  selector: 'app-t-contrato',
  templateUrl: './t-contrato.component.html',
  styleUrls: ['./t-contrato.component.css']
})
export class TContratoComponent implements OnInit {
  contratos!:Contrato[];

  constructor( private contratosevice:ContratoService) { }

  ngOnInit(): void {
    this.get();
  }
get(){
  this.contratos=this.contratosevice.get();
}
}
