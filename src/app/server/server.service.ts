import { Injectable } from '@angular/core';
import { Data } from '../view-model/data';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  data: Data = {
    input1: '',
    input2: '',
    input12: ''
  };


  drop: any = [
    {
      id: 2,
      data: [
        {value : 2},
        {value : 4},
        {value : 6}
      ]
    },
    {
      id: 5,
      data: [
        {value : 3},
        {value : 5},
        {value : 7}
      ]
    }
  ];

  dropData: any = [
    {
      id: 2,
      data: [
        {value : 22},
        {value : 43},
        {value : 64}
      ]
    },
    {
      id: 5,
      data: [
        {value : 33},
        {value : 54},
        {value : 72}
      ]
    }
  ];
  constructor() { }

  getData(input1: string, input2: string) {
    this.data.input12 = input1 + " ? " + input2;
  }

  getId(id : any){
    let i = id;
    return this.dropData.filter(u => u.id == i);

   // return;
  }
}
