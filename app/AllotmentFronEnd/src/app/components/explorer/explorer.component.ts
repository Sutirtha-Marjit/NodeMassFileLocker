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
  masterRoot:any = {
    done:false,
    val:null
  };
  
  explorerObj:Array<any> = [];
  constructor(private grdatamngr:GridDataHandlingService) { 
    
   
  }


  updateImage(item:any){
      if(!item.isDir){
        this.currentTopic = item.accessPath;
      }
  }

  moveAction(){
    const c = window.confirm('Are you sure about to move the file to '+this.getCrAccessPath(this.currentLocation));
    if(c){
      this.whenTargetFolderSelect.emit({target:this.currentLocation});
      this.closeExplorer.emit('close');
    }
    
  }

  close(){
     this.closeExplorer.emit('close');
  }

  getCrAccessPath(path){
    return path.split('$').join('/');
  }

  open(val){
    this.currentLocation = `${this.currentLocation}$${val}`;
    this.loadCurrentPage();
  }

  loadCurrentPage(){
    if(this.currentLocation){
      this.grdatamngr.requestServerFolder(this.currentLocation,(o)=>{
        
        this.explorerObj = o.data.resultObject;
        console.log(this.explorerObj);
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
  @Input() linkData:any = null;
  @Output() linkClicked = new EventEmitter<string>();
  constructor(){

  }

  clicked(){
    this.linkClicked.emit('clicked');
  }
  ngOnInit(){

  }



}