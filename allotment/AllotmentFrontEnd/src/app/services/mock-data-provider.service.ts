import { Injectable } from '@angular/core';
import {ResourceObject} from '../shared/datatypes';

@Injectable()
export class MockDataProviderService {

  constructor() { 

  }

  public static getMockData():Array<ResourceObject>{

    const mockData:Array<ResourceObject> = [
    {width:0, height:0, loaded:false, sourcePath:"http://bit.ly/2yV89fG", targetPath:"", opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2a2BKbI", targetPath:"", opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2wuDrII", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xYEAvO", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xP4en6", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xZyUBX", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xOezzC", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2wuDCUo", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xQEKDn", targetPath:"" , opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2g7uIX0", targetPath:"", opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2hHLTSz", targetPath:"", opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://images.indianexpress.com/2016/08/rrain-759.jpg", targetPath:"", opted:false},    
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xPbCiq", targetPath:"", opted:false},
    {width:0, height:0, loaded:false,sourcePath:"http://bit.ly/2xdmqqW", targetPath:"", opted:false},  
    {width:0,height:0,loaded:false,sourcePath:"http://bit.ly/2fI6cej",targetPath:"", opted:false}  
  ];

    return mockData;

  }

}
