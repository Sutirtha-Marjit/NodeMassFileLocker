import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css']
})
export class AlphabetsComponent implements OnInit, OnChanges {

  @Input() alphabetList:any={};
  @Output() onAlphabetRequest = new EventEmitter<any>();
  list = [];
  constructor() { 

  }

  requestCharacterSearch(ch:string){
    
    let c = ch.toLowerCase();
    this.onAlphabetRequest.emit(c);

  }

  ngOnChanges(){
    this.list = [];
    for(let el in this.alphabetList){
      this.list.push(
        {
          ch:el.toUpperCase(),
          total:this.alphabetList[el]
        }
      );      
      
    }
  }

  ngOnInit() {
    
  }

}
