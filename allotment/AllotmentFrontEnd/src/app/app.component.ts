import { OnInit, Component, Input } from '@angular/core';
import {ResourceObject} from './shared/datatypes';
import {HttpClient} from '@angular/common/http';
import {MockDataProviderService} from './services/mock-data-provider.service';
import {CommonUtilService} from './services/common-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  sourceImageRoot = '';
  popupOpen:boolean = false;
  popupImageObject:ResourceObject = null;
  CurrentSelectedObjects:Array<ResourceObject>=[];
  signedIn:boolean = true;
  localImagePool:Array<ResourceObject> = [];
  givenContainers:any = {outbox:[],model:[]};
  mockInitialData = [];
  
  

  constructor(private http:HttpClient){
    if( "dev" === CommonUtilService.getEnvironment() ){
      this.sourceImageRoot = CommonUtilService.adjustDevProdEnv();     
    }  
    
  }

  initAction(){
    
    CommonUtilService.getResourceList(this.http,(jsonData)=>{
      
      var outputARray=[];
      jsonData.forEach((p,n)=>{
        p.uri = p.uri.replace('./','/');
        p.uri = this.sourceImageRoot+p.uri;
        var ro = {uniq_id:n, width:0, height:0, loaded:false, sourcePath:p.uri, targetPath:"", opted:false} 
        outputARray.push(ro);        
      })
      
      this.localImagePool = outputARray;

    },(error)=>{

    });
    
    CommonUtilService.getCategoryList(this.http,'outbox',(jsonData)=>{
    console.log(jsonData);
    this.givenContainers.outbox = jsonData;
    },()=>{
      
    });

    CommonUtilService.getCategoryList(this.http,'model',(jsonData)=>{
    console.log(jsonData);
    this.givenContainers.model = jsonData;
    },()=>{

    });
    
  }

  openImagePopup(pic:ResourceObject){
    this.popupOpen = true;
    this.popupImageObject = pic;
  }

  ngOnInit(){
    if(CommonUtilService.masterConfig.mockDataRequired){
      this.mockInitialData = MockDataProviderService.getMockData();
      this.localImagePool = this.mockInitialData;
    }        
    
    this.initAction();
  }

  public evalImageProp(event:Event){
    var img:HTMLImageElement = <HTMLImageElement>event.currentTarget;
   
    
  }

  public getModifiedResourceList(opt:boolean){
    return CommonUtilService.getRevisedArray(this.localImagePool,opt);
  }

  public resetCurrentSelectedObject(){
    CommonUtilService.resetAllResources(this.localImagePool);
  }

  public setCurrentObject(obj:ResourceObject){
    obj.opted = true;    
  }

  public resetCurrentObject(obj:ResourceObject){
    obj.opted = false;    
  }
  
  public loginStatus(e:Event){
    e.preventDefault();
    alert('ok');
  }


  

}
