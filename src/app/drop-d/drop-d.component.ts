import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-drop-d',
  templateUrl: './drop-d.component.html',
  styleUrls: ['./drop-d.component.css']
})
export class DropDComponent implements OnInit {
  @Input() id : string = '' ;
  constructor(private server : ServerService) { }
  data : any;
  ngOnInit(): void {
     
  }
  ngOnChanges(changes: SimpleChanges){
    if(this.id){
      console.log(this.id);
      this.data = this.server.getId(this.id);
      let d = this.data.data;
      console.log(d);
    }
  }
}
