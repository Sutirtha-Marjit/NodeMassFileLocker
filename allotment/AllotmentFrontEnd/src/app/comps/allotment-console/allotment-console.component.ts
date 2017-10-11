import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl,NgForm} from '@angular/forms';
import {CommonUtilService} from '../../services/common-util.service';
import {Observable } from 'rxjs/Observable';

import {ResourceContainer,ResourcePostObject, ResourceObject,RequestStatusObject} from '../../shared/datatypes';


@Component({
  selector: 'app-allotment-console',
  templateUrl: './allotment-console.component.html',
  styleUrls: ['./allotment-console.component.css']  
})
export class AllotmentConsoleComponent implements OnInit {
  
  @Input() allContainers:any;
  @Input() toPostResourceList:Array<ResourceObject>;
  @Output() finalPostStarted:EventEmitter<ResourcePostObject> = new EventEmitter();
  @Output() finalPostDone:EventEmitter<RequestStatusObject> = new EventEmitter();
  @Output() onCreateNewContainerRequest:EventEmitter<string> = new EventEmitter();

  public category = "outbox";
  public autoCompleteText:string = "";
  public lastActiveContainer:ResourceContainer = null;
  public listOfContainers:Array<ResourceContainer>=[];
  public lastActiveSubfolderName = null;
  
  constructor(private http:HttpClient) { 
    
  }

  ngOnInit() {
    
  }

  getActiveClass(folder:ResourceContainer):string{
    return folder.opted ? "active" : "";
  }

  openCreateFolderPopup(){
    this.onCreateNewContainerRequest.emit('open');
  }

  private getFinalRPO():ResourcePostObject{
   var crPostObject:ResourcePostObject,
   arr=[],
   path = this.lastActiveSubfolderName ? this.lastActiveContainer.path +"/"+ this.lastActiveSubfolderName : this.lastActiveContainer.path;
   
   this.toPostResourceList.forEach((p)=>{
     arr.push(p.originSourcePath);
   });   
   crPostObject = {target: path, resourcePathList:arr }
         
   return crPostObject;
  }

  finalPost(){
   var postObservableObj:Observable<any>;  
   var crPostObject = this.getFinalRPO();
   this.finalPostStarted.emit(crPostObject);
   var requestPath = CommonUtilService.masterConfig.connection.serviceRequestHost+CommonUtilService.masterConfig.serviceURI.toCopy;
   
   postObservableObj = this.http.post(requestPath,crPostObject);
   postObservableObj.subscribe(
                              (jsonResponseData)=>{
                                
                                var stHeading=":) Done!",
                                stDesc="Copying of "+jsonResponseData.copyComplete+" files successfully done!";
                                console.log(jsonResponseData);
                                if(jsonResponseData.masterErrorObject.targetFolderStatus){
                                  stHeading="Target folder is not available";
                                }
                                if(jsonResponseData.masterErrorObject.sourcefileIntactness){
                                  if(jsonResponseData.masterErrorObject.sourcefileIntactness.length>0){
                                    stHeading="Problem in some files";
                                    stDesc="Please check the list";
                                  }
                                }
                                this.finalPostDone.emit({heading:stHeading,subheading:stDesc,type:'completed'});
                              },
                              (error)=>{
                                this.finalPostDone.emit({heading:"Problem in connection",subheading:"Please check connection",type:'completed'});
                              },
                              ) 
      console.log('post fired');
  }

  resetActiveContaine(){
    this.lastActiveSubfolderName = null;
    this.lastActiveContainer=null;
  }

  setActiveContainer(folder:ResourceContainer,subfolderName:any){
     var selectAction = true;
     this.lastActiveSubfolderName = null;

     if(this.lastActiveContainer!==null){
       if(this.lastActiveContainer.name === folder.name){
         this.lastActiveContainer.opted = false;
         selectAction = false;
         this.lastActiveContainer = null;
       }
     }

     if(selectAction){
       if(this.lastActiveContainer!==null){
      this.lastActiveContainer.opted = false;
    }
        
    this.lastActiveContainer = folder;
    this.lastActiveSubfolderName = subfolderName;
    this.lastActiveContainer.opted = true;

    //console.log('///////////////////////');
    //console.log(this.lastActiveContainer);

     }
    
  }

  getAutoCompleteList():Array<ResourceContainer>{

    return CommonUtilService.getMatchedContainers(this.allContainers[this.category],this.autoCompleteText);
  }

}
