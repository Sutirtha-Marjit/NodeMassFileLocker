import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceObject,ResourceContainer} from '../shared/datatypes';
import * as Lodash from 'lodash';


@Injectable()
export class CommonUtilService {

  constructor() { 
    console.log
  }

  public static getUserFromLocalStorage():boolean{
    var raAuth = window.localStorage.getItem('resource-allotment-auth');
    if(raAuth==='1'){
      return true;
    }else{
      return false;
    }
  }

  public static setUserFromLocalStorage(){
    window.localStorage.setItem('resource-allotment-auth','1');
    
  }

  public static removeUserFromLocalStorage(){
    window.localStorage.removeItem('resource-allotment-auth');
    
  }

  

  public static getCategoryList(http:HttpClient,categoryName:string,success:Function,error:Function){
    
    var requestPath = this.masterConfig.connection.serviceRequestHost+'/service/basic-list/'+categoryName;
    http.get(requestPath).subscribe(function(jsonData){
        var resultArray:Array<ResourceContainer> = [];
        for(var el in jsonData){
          resultArray.push({name:jsonData[el].name,children:jsonData[el].subfolderData.length,path:jsonData[el].uri,opted:false,childrenDetails:jsonData[el].subfolderData,isDir:jsonData[el].directory});
          
        }
        success(resultArray);        
      })
  }

  public static getResourceList(http:HttpClient,success:Function,error:Function){
      var requestPath = this.masterConfig.connection.serviceRequestHost+'/service/basic-list/source';
      http.get(requestPath).subscribe(function(jsonData){
        success(jsonData);        
      })      
  }

  public static getEnvironment():string{
    var env = "dev";
    if(window.location.host === this.masterConfig.connection.locationHost){
      env = "prod";  
    }
    return env;
  }


  public static resetAllResources(rootData:Array<ResourceObject>){
    
    rootData.forEach((n,p)=>{
        n.opted = false;
    })
  }

  public static getRevisedArray(rootData:Array<ResourceObject>,opted:boolean):Array<ResourceObject>{
    
    var resultArray=[];

    rootData.forEach((n,p)=>{
      if(n.opted === opted){
        resultArray.push(n);
      }

    });
    
    return resultArray;

  }

  public static getMatchedContainers(list:Array<ResourceContainer>,matchString:string):Array<ResourceContainer>{
    var listName,arr = [];
    matchString = matchString.toLowerCase();
    if(matchString.trim().length===0){
      arr = list;
    }else{
      list.forEach((p)=>{
      listName =  p.name.toLowerCase();
      
      if(listName.indexOf(matchString)!==-1){
        arr.push(p);
      }else{
        p.childrenDetails.forEach((subEl)=>{
          if(subEl.indexOf(matchString)!==-1){
            arr.push(p);
          }
        })
      }
    })
    }

    return arr;
  }

  public static adjustDevProdEnv():string{
    this.masterConfig.connection.serviceRequestHost = "http://"+this.masterConfig.connection.locationHost;
    return this.masterConfig.connection.serviceRequestHost;
  }

  public static masterConfig:any =  {
    mockDataRequired:false,
    connection:{
      locationHost:"localhost:3000",
      serviceRequestHost:""
    },
    serviceURI:{
      toCopy:'/service/jobs/mastercopy'
    }
  };

}
