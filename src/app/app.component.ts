import { Component, OnInit} from '@angular/core';
import {from, fromEvent} from 'rxjs'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]     
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  sw = true;

  persona = ['marco', 'maria','jorge', 'lupe']

  aux = 3;

  auxColor = 'red';

  ngOnInit(){

  }
}
