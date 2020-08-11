import { Component, OnInit} from '@angular/core';

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

  ngOnInit(){

  }
}
