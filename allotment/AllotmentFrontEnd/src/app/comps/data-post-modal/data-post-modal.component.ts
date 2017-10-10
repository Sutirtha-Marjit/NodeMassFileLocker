import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {ResourceContainer,ResourcePostObject, ResourceObject, RequestStatusObject} from '../../shared/datatypes';

@Component({
  selector: 'app-data-post-modal',
  templateUrl: './data-post-modal.component.html',
  styleUrls: ['./data-post-modal.component.css']
})
export class DataPostModalComponent implements OnInit {

  @Input() statusObject:RequestStatusObject;
  @Output() onReInitApp:EventEmitter<string> = new EventEmitter();
  
  constructor() { 

  }

  ngOnInit() {
    
  }

  reInitApp(){
    this.onReInitApp.emit('init again');
  }

}
