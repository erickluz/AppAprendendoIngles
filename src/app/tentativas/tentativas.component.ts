import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Array<Coracao> = [

    new Coracao(true),
    new Coracao(true),
    new Coracao(true)

  ]

  @Input() public tentativas: number

  constructor() { }

  ngOnChanges() {

    if (this.tentativas != this.coracoes.length){

      let indice = (this.coracoes.length-1) - this.tentativas

      this.coracoes[indice].cheio = false

    }
    
  }

  ngOnInit() {
  }

}
