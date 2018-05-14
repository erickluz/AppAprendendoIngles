import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string
  public boot: boolean = true
  
  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }

  public iniciaAplicacao(boot: boolean): void {
    this.boot = boot
    
    console.log("Erick")
    
  }

}
