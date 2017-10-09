import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl,NgForm} from '@angular/forms';
import {CommonUtilService} from '../../services/common-util.service';

import {ResourceContainer,ResourcePostObject, ResourceObject} from '../../shared/datatypes';


@Component({
  selector: 'app-allotment-console',
  templateUrl: './allotment-console.component.html',
  styleUrls: ['./allotment-console.component.css']  
})
export class AllotmentConsoleComponent implements OnInit {
  
  @Input() allContainers:any;
  @Input() toPostResourceList:Array<ResourceObject>;
  @Output() finalPostStarted:EventEmitter<ResourcePostObject> = new EventEmitter();
  @Output() finalPostDone:EventEmitter<any> = new EventEmitter();

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

  finalPost(){
   var crPostObject:ResourcePostObject,
   arr=[],
   path = this.lastActiveSubfolderName ? this.lastActiveContainer.path +"/"+ this.lastActiveSubfolderName : this.lastActiveContainer.path;
   
   this.toPostResourceList.forEach((p)=>{
     arr.push(p.originSourcePath);
   });   
   crPostObject = {target: path, resourcePathList:arr }
      
   this.finalPostStarted.emit(crPostObject);
   console.log(crPostObject);
   
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

    console.log('///////////////////////');
    console.log(this.lastActiveContainer);

     }
    
  }

  getAutoCompleteList():Array<ResourceContainer>{

    return CommonUtilService.getMatchedContainers(this.allContainers[this.category],this.autoCompleteText);
  }

}
