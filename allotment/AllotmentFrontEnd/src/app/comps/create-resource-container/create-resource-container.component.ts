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
  public fn="";
  public newFolderName = {};
  private completeFolderList = {
    outbox:[],
    model:[]
  };

  activeState = {outbox:'',model:'active'};

  constructor(private http:HttpClient) {

   }

   requestToCreateNewContainer(){
     
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

   getDuplicateSubfolderClass(listItem:ResourceContainer):string{
     
     if(this.newFolderName[listItem.name]){
       var av = listItem.childrenDetails.indexOf(this.newFolderName[listItem.name].trim());
       if(av!==-1){
         return "duplicate";
       }
     }
     return '';
   }

   getAutoCompleteList(){
     //console.log(this.completeFolderList[this.selectedContainer]);
     return this.completeFolderList[this.selectedContainer];
   }

   
   private initAction(){
     CommonUtilService.getCategoryList(this.http,'model',(resultArray:Array<ResourceContainer>)=>{
      this.completeFolderList.model = resultArray;
    },(error)=>{

    });

    CommonUtilService.getCategoryList(this.http,'outbox',(resultArray:Array<ResourceContainer>)=>{
      this.completeFolderList.outbox = resultArray;
    },(error)=>{

    });

   }

  ngOnInit() {
    this.initAction();
  }

}
