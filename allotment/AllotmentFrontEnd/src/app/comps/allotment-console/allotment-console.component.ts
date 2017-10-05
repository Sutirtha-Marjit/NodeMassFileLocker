import { Component, OnInit } from '@angular/core';
import {FormControl,NgForm} from '@angular/forms';
import {CommonUtilService} from '../../services/common-util.service';

import {ResourceContainer} from '../../shared/datatypes';


@Component({
  selector: 'app-allotment-console',
  templateUrl: './allotment-console.component.html',
  styleUrls: ['./allotment-console.component.css']  
})
export class AllotmentConsoleComponent implements OnInit {
  
  public autoCompleteText:string = "";
  public lastActiveContainer:ResourceContainer = null;
  public listOfContainers:Array<ResourceContainer>=[
    {children:10,name:"ascorbic",path:"",opted:false},
    {children:1,name:"Salphuric",path:"",opted:false},
    {children:2,name:"KingAcid",path:"",opted:false},
    {children:5,name:"Wallteir",path:"",opted:false}
  ];
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  getActiveClass(folder:ResourceContainer):string{
    return folder.opted ? "active" : "";
  }

  setActiveContainer(folder:ResourceContainer){
     var selectAction = true;

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
    this.lastActiveContainer.opted = true;
     }
    
  }

  getAutoCompleteList():Array<ResourceContainer>{
    return CommonUtilService.getMatchedContainers(this.listOfContainers,this.autoCompleteText);
  }

}
