import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonUtilService} from '../../services/common-util.service';
import {Observable } from 'rxjs/Observable';
import * as Lodash from 'lodash';
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
  private folderCreationObservable:Observable<any>;
  public newFolderName = {};
  private completeFolderList = {
    outbox:[],
    model:[]
  };

  activeState = {outbox:'',model:'active'};


  constructor(private http:HttpClient) {
    
   }

   private getNonEmptyNameObject():any{
     var v,obj={};
      for(var crEL in this.newFolderName){
        v = this.newFolderName[crEL].trim();
         if(v.length>0){
           obj[crEL] = v;
         }
     }

     return obj;
   }

   folderAddButtonShow(listitemName:string){
     var r = (this.getNonEmptyNameObject())[listitemName] ? true : false; 

     return r;
   }

   requestToCreateNewContainer(){
     var crEL,toPostData={},requestPath = CommonUtilService.masterConfig.connection.serviceRequestHost+'/'+'service/jobs/createnewfolder';
     toPostData = this.getNonEmptyNameObject();
     for(crEL in toPostData){      
         toPostData[crEL] = this.selectedContainer+'/'+crEL+'/'+toPostData[crEL];       
     }
     if(Object.keys(toPostData).length>0){
        this.folderCreationObservable = this.http.post(requestPath,toPostData);
        this.folderCreationObservable.subscribe((jsonData)=>{
       console.log('got JSON');
        },
        (errorObj)=>{
          console.log('error');
        }
        );
     }
     
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
