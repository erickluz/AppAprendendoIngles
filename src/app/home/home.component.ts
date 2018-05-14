import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() public start: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  public iniciaAplicacao(): void {
    this.start.emit(false)
  }

}
