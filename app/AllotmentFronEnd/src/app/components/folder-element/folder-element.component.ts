import { Component, OnInit, Input } from '@angular/core';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';

@Component({
  selector: 'app-folder-element',
  templateUrl: './folder-element.component.html',
  styleUrls: ['./folder-element.component.css']
})
export class FolderElementComponent implements OnInit {

  elementType:string = '';
  elementLength=0;
  cardRollArray:Array<string>=[];

  @Input() albumData:any = {}; 
  constructor(private griddatamngr:GridDataHandlingService) { 

  }

  getDetail(delay){
    setTimeout(()=>{
      let c=0,notFound = true;
      let url = (`${this.albumData.path}`.replace('./operations/','')).split('/').join('$');
      this.griddatamngr.requestServerFolder(url,(resultSet)=>{
      this.elementLength = resultSet.data.resultObject.length;
      
      for(let im=0;im<3;im++){
        if(resultSet.data.resultObject[im]){  
          let p = this.griddatamngr.getRealImagePath(resultSet.data.resultObject[im].path);     
          this.cardRollArray.push(p);

        }
      }
      /*
      while(notFound){
        if(resultSet.data.resultObject[c]){       

            if(!resultSet.data.resultObject[c].isDir){
              let p = this.griddatamngr.getRealImagePath(resultSet.data.resultObject[c].path);
              this.cardRollArray.push(p);
              c++;
            }
            if(c===3 || c===this.elementLength-1){
              notFound = false;
            }

        }else{
          notFound = false;
        }
        
      }*/

      //console.log(this.cardRollArray);
      
      

      },(error)=>{

      })
    },delay);
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
