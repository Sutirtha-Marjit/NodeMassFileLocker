import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';
import {environment} from '../../../environments/environment';
import {ServerFolderObject,FolderDetails} from '../../interfaces/datatypes';
import {FolderElementComponent} from '../folder-element/folder-element.component';


@Component({
  selector: 'app-shift-resource',
  templateUrl: './shift-resource.component.html',
  styleUrls: ['./shift-resource.component.css']
})
export class ShiftResourceComponent implements OnInit {
  chars;
  currentFolder;
  mastereFilteredData;
  appliedData = [];
  closeSlidePanel = false;
  closeExplorerFlag = false;

  constructor(private route: ActivatedRoute,private griddatamngr:GridDataHandlingService) {

   }
   
   slidePanelOp(){
     this.closeSlidePanel = !this.closeSlidePanel;
   }

   fetchGridData(path){
    this.chars = {};
    this.currentFolder = this.griddatamngr.getFolderObjectMinimal(path);
    
    this.griddatamngr.requestServerFolder(path,(resultSet)=>{
      if(resultSet.meta.status){

        this.mastereFilteredData = resultSet.data.resultObject;
        this.mastereFilteredData.forEach((fObject:ServerFolderObject)=>{
          let ch = fObject.file.charAt(0).toLowerCase();
          if(!this.chars[ch]){
            this.chars[ch]=1;
          }else{
            this.chars[ch]++;
          }
          
        });
        
        this.furnishData();

      }else{
        alert(resultSet.meta.message);
      }
      

    },(err)=>{

    });
    
  }

  selectToMoveList(flag,item){
      if(!flag){
        item.selected = true;
      }else{
        item.selected = false;
      }

      console.log(item);
  }

  openExplorer(){
    this.closeSlidePanel=true;
    this.closeExplorerFlag = true;
  }

  closeExplorer(){
      this.closeExplorerFlag = false;
  }


  getSelecteds(){
    const data=[];
    this.appliedData.forEach((arr)=>{
        arr.forEach((el)=>{
          if(el.selected){
            data.push(el);
          }
        });
    });

    return data;
  }

  furnishData(){
    
    let i=0;
    const arr = [];
    const cols= 5;
    for(let a=0;a<cols;a++){
      arr.push([]);
    }
    
    while(i<this.mastereFilteredData.length){
      for(let j=0;j<cols;j++){
        if(this.mastereFilteredData[i] && this.mastereFilteredData[i].isDir===false){
          arr[j].push(this.mastereFilteredData[i]);
          arr[j][arr[j].length-1].selected = false;
          i++;
        }else{
          i=this.mastereFilteredData.length*100;
        }
      }
      
    }
    console.log(arr);
    this.appliedData = arr;
 }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      
      let crChildPath = params['childpath'];
      
      this.fetchGridData(crChildPath);
        
    });

  }

}
