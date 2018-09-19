import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { GridDataHandlingService} from '../../services/grid-data-handling.service';
import { ActivatedRoute,Router} from '@angular/router';
import { Location} from '@angular/common';



@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AnalyzeComponent implements OnInit {

  openExlorer = false;
  currentItemToMove='';
  storageName = 'ANALYZE';
  topicEl:any = {
    src:''
  };
  public currentStoreObject:AnalyzeSessionObject = null;
  constructor(private route: ActivatedRoute,private router:Router,private location:Location,private griddatamngr:GridDataHandlingService) { 
    
    const tempData = window.localStorage.getItem(this.storageName);
    if(tempData===null){
      this.currentStoreObject = {
        duplicate:[],
        wrong:[],
        erase:[]
      };
    }else{
      this.currentStoreObject = JSON.parse(tempData);
    }
    
    
  }

  backPage(){
    this.location.back();
  }

  getLocation(path){

    let arr = path.split('/');
    return arr[arr.length-3]+'/'+arr[arr.length-2];
  }

  removeItemFor(category:string,path:string){
    const i = this.currentStoreObject[category].indexOf(path);
    this.currentStoreObject[category].splice(i,1);
    window.localStorage.setItem(this.storageName,JSON.stringify(this.currentStoreObject));
    
  }

  setItemFor(category:string,path:string):boolean{
    
    switch(category){
      case 'duplicate':
      if(this.currentStoreObject.duplicate.indexOf(path)===-1){
        this.currentStoreObject.duplicate.push(path);
      }
      
      break;

      case 'wrong':
      if(this.currentStoreObject.wrong.indexOf(path)===-1){
      this.currentStoreObject.wrong.push(path);
      }
      break;

      case 'erase':
      if(this.currentStoreObject.erase.indexOf(path)===-1){
      this.currentStoreObject.erase.push(path);
      }
      break;
    }
    window.localStorage.setItem(this.storageName,JSON.stringify(this.currentStoreObject));    
    return true;
  }

  closeExplorer(){
    this.openExlorer = false;
  }

  moveItemTo(crSource){
    this.currentItemToMove = crSource;
    this.openExlorer = true;
  }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
      if(params.resourcePath){
        this.topicEl.src = this.griddatamngr.decryptPath(params.resourcePath);
      }

    });
  }

}

export interface AnalyzeSessionObject{
        duplicate:Array<string>,
        wrong:Array<string>,
        erase:Array<string>
}