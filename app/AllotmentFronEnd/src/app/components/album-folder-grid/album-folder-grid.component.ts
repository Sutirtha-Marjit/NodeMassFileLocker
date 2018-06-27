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
  pageSize = 9;
  crPageCount=6;
  mastereFilteredData=[];
  filteredData = [];
  
  constructor(private route: ActivatedRoute,private griddatamngr:GridDataHandlingService) { 

  }

  prevPage(){
    if(this.crPageCount>0){
      this.crPageCount--;
    }    
  }

  nextPage(){
    this.crPageCount++;
  }

  getFolderLink(i:number){
    return this.griddatamngr.getCorrectLocationFromPathArray(this.currentFolder.pathArray,i);
  }

  searchRequest(params:any){
    return this.griddatamngr.getFiltered(this.mastereFilteredData,params,this.pageSize);
  }

  furnishData(){
     this.filteredData = this.searchRequest({});
     
  }

  fetchGridData(path){
    
    this.currentFolder = this.griddatamngr.getFolderObjectMinimal(path);
    
    this.griddatamngr.requestServerFolder(path,(resultSet)=>{
      if(resultSet.meta.status){

        this.mastereFilteredData = resultSet.data.resultObject;
        this.furnishData();

      }else{

      }
      

    },(err)=>{});
    
  }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
      this.filteredData = [];
      let childpath = params['childpath'];
        this.fetchGridData(childpath);
        
    });
  }

}
