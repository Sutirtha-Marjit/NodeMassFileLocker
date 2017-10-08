import { Component, OnInit , Input} from '@angular/core';
import {FormControl,NgForm} from '@angular/forms';
import {CommonUtilService} from '../../services/common-util.service';

import {ResourceContainer} from '../../shared/datatypes';


@Component({
  selector: 'app-allotment-console',
  templateUrl: './allotment-console.component.html',
  styleUrls: ['./allotment-console.component.css']  
})
export class AllotmentConsoleComponent implements OnInit {
  
  @Input() allContainers:any;
  public category = "outbox";
  public autoCompleteText:string = "";
  public lastActiveContainer:ResourceContainer = null;
  public listOfContainers:Array<ResourceContainer>=[];
  public lastActiveSubfolderName = null;
  
  constructor() { 
    
  }

  ngOnInit() {
    console.log('AllotmentConsoleComponent:');
    console.log(this.allContainers);
  }

  getActiveClass(folder:ResourceContainer):string{
    return folder.opted ? "active" : "";
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

     }
    
  }

  getAutoCompleteList():Array<ResourceContainer>{

    return CommonUtilService.getMatchedContainers(this.allContainers[this.category],this.autoCompleteText);
  }

}
