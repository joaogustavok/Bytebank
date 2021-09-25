import { Transferencia } from './../../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

 transferencias: any[];

  constructor(private service: TransferenciasService) { }

  ngOnInit()  {
 this.service.todas().subscribe((transferencias: Transferencia[]) =>{
   console.table(transferencias);
   this.transferencias = transferencias;
 });
  }

}
