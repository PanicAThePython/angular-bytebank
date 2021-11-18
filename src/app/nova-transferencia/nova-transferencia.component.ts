import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
  })
export class NovaTransferenciaComponent {

  //envia os dados para o componente que o chamou
  @Output() aoTransferir: EventEmitter<any> = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router){};

  transferir() {
    const valores: Transferencia = {valor:this.valor, destino:this.destino};
    // this.aoTransferir.emit(valores);

    this.service.adicionar(valores).subscribe(
    (resultado) =>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    // (error) =>{ console.error(error)}
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
