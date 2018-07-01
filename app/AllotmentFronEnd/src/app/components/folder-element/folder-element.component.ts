import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';
import { FolderDetails } from '../../interfaces/datatypes';

@Component({
  selector: 'app-folder-element',
  templateUrl: './folder-element.component.html',
  styleUrls: ['./folder-element.component.css']
})
export class FolderElementComponent implements OnInit , OnChanges{

  elementType:string = '';
  elementLength=0;
  subFolderList:Array<any>=[];
  cardRollArray:Array<any>=[];
  elementLink="";

  @Input() albumData:any = {}; 
  @Input() containerFolder:FolderDetails;
  constructor(private griddatamngr:GridDataHandlingService) { 

  }

  test(){
    alert(JSON.stringify(this.cardRollArray));
  }

  getDetail(delay){
    setTimeout(()=>{
      let c=0,fCount=0,notFound = true;
      let url = (`${this.albumData.path}`.replace('./operations/','')).split('/').join('$');
      this.griddatamngr.requestServerFolder(url,(resultSet)=>{
      this.elementLength = resultSet.data.resultObject.length;
     
      while(c<resultSet.data.resultObject.length && notFound){

        if(!resultSet.data.resultObject[c].isDir){
          let currentCardData = Object.assign({},resultSet.data.resultObject[c]);
          currentCardData.accessPath = this.griddatamngr.getRealImagePath(currentCardData.path);
          this.cardRollArray.push(currentCardData);
          fCount++;
          if(fCount===2){
            notFound = false;           
          }
        }
        c++;
      }

      resultSet.data.resultObject.forEach((p,i)=>{
        if(p){
          if(p.isDir){
            this.subFolderList.push(p);
          }
        }        
      });
      
      console.log(this.subFolderList);
      //console.log('----------------------Element:End----------------------------');
      

      },(error)=>{

      })
    },delay);
  }

  ngOnChanges(){
    
    this.elementLink = '/#/album/'+this.griddatamngr.getCorrectLocationFromPathArray(this.containerFolder.pathArray,this.containerFolder.pathArray.length-1)+'$'+this.albumData.file+'/0';
  }

  ngOnInit() {
    if(this.albumData.isDir){
      this.elementType = 'folder';
      this.getDetail(1);
    }else{
      this.elementType = 'image';
    }
    


  }

}
