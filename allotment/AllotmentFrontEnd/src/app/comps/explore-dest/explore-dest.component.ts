import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CommonUtilService} from '../../services/common-util.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-explore-dest',
  templateUrl: './explore-dest.component.html',
  styleUrls: ['./explore-dest.component.css']
})
export class ExploreDestComponent implements OnInit {

  @Input() givenContainers:any;
  @Output() onCloseRequest:EventEmitter<string> = new EventEmitter<string>();  
  public CommonUtilService = CommonUtilService;
  public browsePath:string = '';
  constructor(private http:HttpClient) { 

  }

  public onClose(){
    this.onCloseRequest.emit('close');
  }

  resetBrowawePath(){
    this.browsePath = '';
  }

  

  populateResources(){
    var dataToPost = {containerURI:this.browsePath};
    
  }
  
  setBrowsePath(path:string){
    this.browsePath = path;
    this.populateResources();
  }

  
  ngOnInit() {
    console.log('ExploreDestComponent');
    console.log(this.givenContainers);
  }

}
