import { Component, OnInit, Input,Output,  ViewChild, TemplateRef, ElementRef ,EventEmitter, ViewEncapsulation} from '@angular/core';

import {GridDataHandlingService} from '../../services/grid-data-handling.service';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ExplorerComponent implements OnInit {

  @Input() view = 0;
  @Input() currentTopic = '../../../assets/svgs/pic.svg';
  @Input() currentObject:any = {};
  @Input() currentLocation = '';
  @Output() closeExplorer = new EventEmitter<any>();
  @Output() whenTargetFolderSelect = new EventEmitter<any>();
  @ViewChild('nestedList') nestedList:TemplateRef<any>;

  autoCompleteSearch = "";
  masterRoot:any = {
    done:false,
    val:null
  };
  
  explorerObj:Array<any> = [];
  constructor(private grdatamngr:GridDataHandlingService) { 
    
   
  }


  

  moveAction(){
    const c = window.confirm('Are you sure about to move the file to '+this.getCrAccessPath(this.currentLocation));
    if(c){
      let sourceFile = `${this.grdatamngr.realPathToServerAccessPath(this.currentTopic,true)}$${this.currentTopic.split('/').reverse()[0]}`;
      console.log(sourceFile);
      this.whenTargetFolderSelect.emit({target:this.currentLocation,source:sourceFile});
      this.closeExplorer.emit('close');
    }
    
  }

  close(){
     this.closeExplorer.emit('close');
  }

  getCrAccessPath(path){
    return path.split('$').join('/');
  }

  open(evtType,obj){
    
    if(evtType==='image'){
      this.updateImage(obj);
    }else{
      this.currentLocation = `${this.currentLocation}$${obj.file}`;
      this.loadCurrentPage();
    }    
  }

  updateImage(item:any){
    
    if(!item.isDir){
      this.currentTopic = item.accessPath;  
    }
  }

  getExploreObject(){
    this.explorerObj.forEach((obj)=>{
        obj.searchVisible = true;

        if(this.autoCompleteSearch.trim().length>0){
          const f = obj.file.toLowerCase();
          const a = this.autoCompleteSearch.toLowerCase();

          if(f.indexOf(a)>-1){
            obj.searchVisible = true;
          }else{
            obj.searchVisible = false;
          }
        }
        

    });
    console.log(this.explorerObj);
    return this.explorerObj;
  }

  loadCurrentPage(){
    if(this.currentLocation){
      this.grdatamngr.requestServerFolder(this.currentLocation,(o)=>{
        
        this.explorerObj = o.data.resultObject;

        
      },()=>{
  
      })
    }
  }

  openUp(val){
    if(val==='up'){
      let arr = this.currentLocation.split('$');
      arr.splice(arr.length-1,1)
      
      this.currentLocation = arr.join('$');
      this.loadCurrentPage();
    }else{
      this.currentLocation = this.masterRoot.val;
      this.loadCurrentPage();
    }
  }
  

  ngOnInit() {
    if(this.currentLocation!=='' && !this.masterRoot.done){
      this.masterRoot.done = true;
      this.masterRoot.val = this.currentLocation;
    }
    this.loadCurrentPage();
  }

}



@Component({
  selector:'file-element-link',
  templateUrl:'./file-element-link.component.html',
  styleUrls:['./file-element-link.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FileElementLink implements OnInit{
  @Input() searchVisible = false;
  @Input() linkData:any = null;
  @Output() linkClicked = new EventEmitter<string>();
  @Output() imageUpdateRequest = new EventEmitter<any>();
  constructor(){

  }

  clickedForImage(){
    
    this.imageUpdateRequest.emit(this.linkData);
    console.log(this.imageUpdateRequest);
  }

  clicked(requestType:string){    
    this.linkClicked.emit(requestType);
  }
  ngOnInit(){

  }



}