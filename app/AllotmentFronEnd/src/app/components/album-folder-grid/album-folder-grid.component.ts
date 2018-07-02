import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';
import {environment} from '../../../environments/environment';
import {FolderDetails} from '../../interfaces/datatypes';
import {FolderElementComponent} from '../folder-element/folder-element.component';


@Component({
  selector: 'app-album-folder-grid',
  templateUrl: './album-folder-grid.component.html',
  styleUrls: ['./album-folder-grid.component.css']
})
export class AlbumFolderGridComponent implements OnInit {

  currentFolder:FolderDetails=null;
  pageSize:number = 4;
  crPageCount:number=0;
  crChildPath="";
  mastereFilteredData=[];
  filteredData = [];
  chars:Array<string>=[];
  
  constructor(private route: ActivatedRoute,private griddatamngr:GridDataHandlingService) { 
    for(let i=65;i<65+26;i++){
      this.chars.push(String.fromCharCode(i));
    }
    
  }

  paginationNavigate(direction:string='next'):number{
      let output = 0;
      switch(direction){
        case 'next':
        output = this.crPageCount+1;
        break;

        case 'previous':
        output = this.crPageCount-1;
        break;
      }
      
      return output;
  }


  getFolderLink(i:number){
    return this.griddatamngr.getCorrectLocationFromPathArray(this.currentFolder.pathArray,i);
  }

  searchRequest(params:any){
    return this.griddatamngr.getFiltered(this.mastereFilteredData,params,this.pageSize);
  }

  furnishData(reqParams:any){
     this.filteredData = this.searchRequest(reqParams);
     
     
  }

  fetchGridData(path){
    
    this.currentFolder = this.griddatamngr.getFolderObjectMinimal(path);
    
    this.griddatamngr.requestServerFolder(path,(resultSet)=>{
      if(resultSet.meta.status){

        this.mastereFilteredData = resultSet.data.resultObject;
        this.furnishData({});

      }else{

      }
      

    },(err)=>{});
    
  }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
      this.filteredData = [];
      this.crChildPath = params['childpath'];
      if(params['pagenumber']){
        this.crPageCount = parseInt(params['pagenumber']);
      }
      if(params['pagesize']){
        this.pageSize = parseInt(params['pagesize']);
      }
      this.fetchGridData(this.crChildPath);
        
    });
  }

}
