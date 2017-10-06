import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceObject,ResourceContainer} from '../shared/datatypes';


@Injectable()
export class CommonUtilService {

  

  constructor() { 

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
      }
    })
    }

    return arr;
  }

  public static adjustDevProdEnv(){
    this.masterConfig.connection.serviceRequestHost = "http://"+this.masterConfig.connection.locationHost;
    console.log(this.masterConfig.connection);
  }

  public static masterConfig:any =  {
    connection:{
      locationHost:"localhost:3000",
      serviceRequestHost:""
    }
  };

}
