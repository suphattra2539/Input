import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Data } from '../view-model/data';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() input1: string ='';
  @Input() input2: string ='';
  constructor(private server : ServerService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.input1 && this.input2) {
      this.change();
    } 
  }

  change(){
    this.server.getData(this.input1, this.input2);
  }
}
