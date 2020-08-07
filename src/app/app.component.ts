import { Component, VERSION, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;

  @Input() age: number;
  @Output() clickAge = new EventEmitter();

  constructor() {
  }

  onClickSave() {
    this.clickAge.emit({

      age: this.age
    })
  }
}
