import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from 'test/test.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, PersonaModule, ProductModule],
  declarations: [ AppComponent, TestPipe, ExpoPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
