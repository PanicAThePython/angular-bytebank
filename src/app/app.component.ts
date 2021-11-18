import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // transferencias: any[] = [];

  constructor(private service: TransferenciaService){

  }

  // receber(evento: any){
  //   // const transferencia = {...evento, data: new Date()};
  //   // this.transferencias.push(transferencia);

  //   this.service.adicionar(evento);
  // }
}
