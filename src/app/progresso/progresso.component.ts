import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {

  @Input() public valorProgresso: number = 0
  public width: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(data) {
    this.valorProgresso = data.valorProgresso.currentValue;
    this.width = this.valorProgresso + '%';
  }

}
