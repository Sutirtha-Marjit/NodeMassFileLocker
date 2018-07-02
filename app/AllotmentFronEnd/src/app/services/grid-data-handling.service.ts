import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FolderDetails} from '../interfaces/datatypes';
import {REQ_PATH} from '../constants';
import {environment} from '../../environments/environment';
import * as Lodash from "lodash";



@Injectable({
  providedIn: 'root'
})
export class GridDataHandlingService {

  MASTER_CACHE:any={};
  constructor(private http:HttpClient) { }

  public getViewablePath(path){
    return path.split('$').join('/');
  }

  public getCurrentFolderName(path){
    return `${path}`.split('$').pop();
  }

  public getFolderObjectMinimal(path):FolderDetails{
    let arr = `${path}`.split('$');
    
    
    return {
      name:arr[arr.length-1],
      path:arr.join('/'),
      isDir:true,
      pathArray:arr
    }
  }

  public getRealImagePath(path){
    let p = `${path}`.replace('./','');
    return environment.SERVICE_HOST+p;
  }

  public getCorrectLocationFromPathArray(p:Array<string>,index:number){
    let gPath="";
    
    for(let i=0;i<=index;i++){
      gPath = gPath +p[i];
      if(i!==index){
        gPath = `${gPath}$`;
      }
    }

    return gPath;
  }

  getPages(resultSet:Array<any>,pageSize:number){

    let count=0,groupList = [];
    const totalPages = Math.ceil(resultSet.length/pageSize);

    for(let p=0;p<totalPages;p++){
      groupList[p]=[];
      for(let el=0;el<pageSize;el++){
        if(resultSet[count]){
          groupList[p].push(resultSet[count]);
          count++;
        }        
      }
    }

    return groupList;
  }

  getFiltered(resultSet:Array<any>,filter:any,pageSize:number){
    
    let data = resultSet;
    /*
    if(Object.keys(filter).length>0){
    data = Lodash.find(resultSet,(el)=>{
      return (`${el.file}`.toLowerCase().indexOf(filter.startsWith)===0)
    });
    }*/
    return this.getPages(data,pageSize);
    //return resultSet;
  }

  public requestServerFolder(url:string,success,failure){
    
    let albumRequestURL = `${environment.SERVICE_HOST}${REQ_PATH.folderDetail}${url}`;
    
      if(this.MASTER_CACHE[albumRequestURL]){
        //console.log('data is available');
        success(this.MASTER_CACHE[albumRequestURL]);

      }else{
     // console.log('Treated as new request');  
      this.http.get(albumRequestURL,{}).subscribe((receivedData:any)=>{

        receivedData.data.resultObject.forEach((el)=>{
         el.accessPath = this.getRealImagePath(el.path);
        })
          success(receivedData);
          this.MASTER_CACHE[albumRequestURL] = receivedData;
         // console.log('Data saved in Master Cache');
         // console.log(this.MASTER_CACHE)

        },(error)=>{
          failure(error);
        });
      
      }
    
  }

}
