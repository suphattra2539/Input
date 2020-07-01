import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Data } from './view-model/data';
import { ServerService } from './server/server.service';
import { BsModalService } from 'ngx-bootstrap/modal';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataGet = new Data;
  input1: string = '';
  input2: string = '';

  showP: boolean = false
  modalRef: any;

  drops :any ;
  dropMin : any;

  id : any;
  constructor(private server: ServerService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.dataGet = this.server.data;
    this.drops = this.server.drop;
  }
  valuechange($event) {
    this.dataGet = new Data;
    console.log(this.dataGet);
  }

  valuechange2($event) {
  }

  onClick(){

  }

  onClickEvent(drop){
    console.log(drop);
    this.id = drop;
  }
  // onClick($event) {
  //   console.log('Ok');
  // }

  // onClick2($event) {
  //     console.log('Ok');
  // }

  // onKeydown(event) {
  //   console.log(event);
  //   alert('Ok');
  // }

  open(NgbdModalContent: TemplateRef<any>) {
   this.openModal2(NgbdModalContent);
  }
  openModal2(NgbdModalContent: TemplateRef<any>) {
    this.modalRef = this.modalService.show(NgbdModalContent);
  }

}
