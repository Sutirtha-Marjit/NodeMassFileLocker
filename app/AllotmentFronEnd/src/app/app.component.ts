import { Component, OnInit } from '@angular/core';
import {GridDataHandlingService} from './services/grid-data-handling.service';
import {CompleteFolderResponse} from './interfaces/datatypes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  openExlorer=false;
  baseurl='';
  baseResponseData:CompleteFolderResponse = null;
  constructor(private griddatamngr:GridDataHandlingService){

    
  }

  closeExplorer(){
    this.openExlorer = false;
  }

  openExplorer(){
    this.openExlorer = true;
  }


  ngOnInit(){
    this.griddatamngr.requestServerFolder(this.baseurl,(baseResponseData)=>{
      
      
      this.baseResponseData = baseResponseData;
      this.baseResponseData.data.resultObject.forEach((d)=>{
        d.accessPath = `/album/${this.griddatamngr.realPathToServerAccessPath(d.file)}`;
        
      })
      console.log(baseResponseData);

    },()=>{})

  }

  getCahce(){
    return Object.keys(this.griddatamngr.MASTER_CACHE).length+'OKOK';
  }

  
}
