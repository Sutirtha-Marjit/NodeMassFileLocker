import { Injectable } from '@angular/core';
import {ResourceObject} from '../shared/datatypes';

@Injectable()
export class MockDataProviderService {

  constructor() { 

  }

  public static getMockData():Array<ResourceObject>{

    const mockData:Array<ResourceObject> = [
    {originSourcePath:"", uniq_id:0, width:0, height:0, loaded:false, sourcePath:"https://cdn.thinglink.me/api/image/724116666635517952/1240/10/scaletowidth", targetPath:"", opted:false},
    {originSourcePath:"", uniq_id:1, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2a2BKbI", targetPath:"", opted:false},
    {originSourcePath:"", uniq_id:2, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2wuDrII", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:3, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xYEAvO", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:4, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xP4en6", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:5, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xZyUBX", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:6, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xOezzC", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:7, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2wuDCUo", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:8, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xQEKDn", targetPath:"" , opted:false},
    {originSourcePath:"", uniq_id:9, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2g7uIX0", targetPath:"", opted:false},
    {originSourcePath:"", uniq_id:10, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2hHLTSz", targetPath:"", opted:false},
    {originSourcePath:"", uniq_id:11, width:0, height:0, loaded:false,sourcePath:"http://images.indianexpress.com/2016/08/rrain-759.jpg", targetPath:"", opted:false},    
    {originSourcePath:"", uniq_id:12, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xPbCiq", targetPath:"", opted:false},
    {originSourcePath:"", uniq_id:13, width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xdmqqW", targetPath:"", opted:false},  
    {originSourcePath:"", uniq_id:14, width:0,height:0,loaded:false,sourcePath:"http://bit.ly/2fI6cej",targetPath:"", opted:false}  
  ];

    return mockData;

  }

}
