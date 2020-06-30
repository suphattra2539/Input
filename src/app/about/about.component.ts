import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Data } from '../view-model/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() input1: string ='';
  @Input() input2: string ='';
  @Input() input3: string ='';
  data = new Data;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.input1) {
      this.data.input1= this.input1; 
    }
    if (this.input2) {
      this.data.input2 =this.input2; 
    }
    this.data.input12 = this.data.input1 + "//" + this.data.input2; 
    console.log(this.data.input12);
    this.input3 = this.data.input12;
  }
}
