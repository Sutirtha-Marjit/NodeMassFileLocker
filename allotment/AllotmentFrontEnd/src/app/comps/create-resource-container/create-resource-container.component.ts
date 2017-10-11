import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonUtilService} from '../../services/common-util.service';
import {Observable } from 'rxjs/Observable';
import {ResourceContainer,ResourcePostObject, ResourceObject,RequestStatusObject} from '../../shared/datatypes';

@Component({
  selector: 'app-create-resource-container',
  templateUrl: './create-resource-container.component.html',
  styleUrls: ['./create-resource-container.component.css']
})
export class CreateResourceContainerComponent implements OnInit {
  
  @Output() onCloseWindow:EventEmitter<string> = new EventEmitter();
  selectedContainer = 'model';
  private completeFolderList = {
    outbox:[],
    model:[]
  };

  activeState = {outbox:'',model:'active'};

  constructor(private http:HttpClient) {

   }

   close(){
     this.onCloseWindow.emit('close');
   }

   setSelectedContainer(containerName:string){
     this.selectedContainer = containerName;
     if(containerName==='outbox'){
       this.activeState.outbox = 'active';
       this.activeState.model = '';
     }else{
       this.activeState.outbox = '';
       this.activeState.model = 'active';
     }
   }

   getAutoCompleteList(){
     return this.completeFolderList[this.selectedContainer];
   }

  ngOnInit() {
    CommonUtilService.getCategoryList(this.http,'model',(resultArray:Array<ResourceContainer>)=>{
      this.completeFolderList.model = resultArray;
    },(error)=>{

    });

    CommonUtilService.getCategoryList(this.http,'outbox',(resultArray:Array<ResourceContainer>)=>{
      this.completeFolderList.outbox = resultArray;
    },(error)=>{

    });

  }

}
