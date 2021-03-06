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
  @Output() clickSave = new EventEmitter();

  user:string = 'maria';
  constructor() {
  }

  onClickSave() {
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    })
  }
}