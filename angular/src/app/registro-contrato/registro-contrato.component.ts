import { Component, OnInit } from '@angular/core';
import { Contrato } from '../modelos/contrato';
import { ContratoService } from '../servicios/contrato.service';

@Component({
  selector: 'app-registro-contrato',
  templateUrl: './registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {
contrato!:Contrato;

constructor(private contratosevice:ContratoService) { }


  ngOnInit(): void {
    this.contrato=new Contrato;
  }
  add(){
    this.contrato.saldo =  this.contrato.valorcontrato;
    this.contratosevice.post(this.contrato);
    alert('Se agrego un nuevo contrato');
  }

}
