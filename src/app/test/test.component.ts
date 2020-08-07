import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './test.component.html',
  styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit{

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;
  @Output() clickName = new EventEmitter();
  @Output() clickAge = new EventEmitter();
  @Output() clickDescription = new EventEmitter();

  constructor() {
  }

  onClickSave() {
    this.clickAge.emit({
      name: this.name
      age: this.age
      description: this.description
    })
  }
}