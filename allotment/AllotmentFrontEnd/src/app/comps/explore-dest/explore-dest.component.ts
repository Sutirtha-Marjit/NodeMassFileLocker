import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CommonUtilService} from '../../services/common-util.service';
import {HttpClient} from '@angular/common/http';
import {GeneralPhotoShow,AlbumResourceObject} from '../../shared/datatypes';


@Component({
  selector: 'app-explore-dest',
  templateUrl: './explore-dest.component.html',
  styleUrls: ['./explore-dest.component.css']
})
export class ExploreDestComponent implements OnInit {

  @Input() givenContainers:any;
  @Output() onCloseRequest:EventEmitter<string> = new EventEmitter<string>();  
   
  public browsePath;
  public browsedData:GeneralPhotoShow;
  private COL_LENGTH:number = 6; 

  constructor(private http:HttpClient) { 
    this.browsedData = {COL_LENGTH:this.COL_LENGTH,list:[]};
    this.browsePath = '';
  }

  public onClose(){
    this.onCloseRequest.emit('close');
  }

  resetBrowawePath(){
    this.browsePath = '';
  }

  geArrayVersionOfGivenContainers():Array<{key:string,val:any}>{
    return CommonUtilService.toRepeatable(this.givenContainers);
  }

  

  populateResources(){
    var dataToPost = {containerURI:this.browsePath};
    CommonUtilService.getSpecificResourceList(this.http,dataToPost,(data)=>{
      var max_iter,tick=0;
      this.browsedData = {COL_LENGTH:this.COL_LENGTH,list:[]};

      if(data.length>0){
        max_iter = Math.ceil(data.length/this.browsedData.COL_LENGTH);
        for(var i=0;i<max_iter;i++){
          for(var w=0;w<this.browsedData.COL_LENGTH;w++){
              if(!this.browsedData.list[w]){
                  this.browsedData.list[w] = [];
              }

              if(tick<data.length){
                if(!data[tick].isDir){
                  data[tick].path = CommonUtilService.masterConfig.connection.serviceRequestHost+(data[tick].path.replace('./','/'));
                  
                }
                this.browsedData.list[w].push(data[tick]);
              }

              tick++;
          }
        } 

        

      }

      
    },()=>{

    });
    
  }
  
  setBrowsePath(path:string){
    this.browsePath = path;
    this.populateResources();
  }

  
  ngOnInit() {
    console.log('ExploreDestComponent');
    console.log(this.givenContainers);
  }

}
