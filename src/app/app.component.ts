import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Data } from './view-model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnChange';
  dataGet = new Data;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  constructor() { }

  valuechange($event) {
  }

  valuechange2($event) {
  }

}
