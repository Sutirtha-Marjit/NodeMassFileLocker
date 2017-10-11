import { OnInit, Component, Input } from '@angular/core';
import {ResourceObject,ResourcePostObject, RequestStatusObject, AuthenticatedUserProfile} from './shared/datatypes';
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
  dataPostModalOpen = false;
  createResourceContainerPopupOpen:boolean = false;
  crDataPostObject:ResourcePostObject = null;
  popupImageObject:ResourceObject = null;
  crDataPostStatusObject:RequestStatusObject = {heading:"",subheading:"",type:''};
  CurrentSelectedObjects:Array<ResourceObject>=[];
  signedIn:boolean = false;
  localImagePool:Array<ResourceObject> = [];
  givenContainers:any = {outbox:[],model:[]};
  mockInitialData = [];
  
  

  constructor(private http:HttpClient){
    if( "dev" === CommonUtilService.getEnvironment() ){
      this.sourceImageRoot = CommonUtilService.adjustDevProdEnv();     
    }  
    
  }

  initAction(){
    
    this.popupOpen = false;
    this.dataPostModalOpen = false;
    this.crDataPostObject = null;
    this.popupImageObject = null;
    this.crDataPostStatusObject = {heading:"",subheading:"",type:''};  
    
    CommonUtilService.getResourceList(this.http,(jsonData)=>{
      
      var outputARray=[];
      jsonData.forEach((p,n)=>{
        var orig = ''+p.uri;
        p.uri = p.uri.replace('./','/');
        p.uri = this.sourceImageRoot+p.uri;
        var ro = {uniq_id:n, width:0, originSourcePath:orig, height:0, loaded:false, sourcePath:p.uri, targetPath:"", opted:false} 
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

  onResourceImageLoad($im:number){
    
    var picTag:Element = document.querySelectorAll('.image-pool .resource-box-image').item($im);
    picTag.classList.add('image-loaded');
  }

  onCopyOperationComplete(obj:RequestStatusObject){
    this.crDataPostStatusObject = obj;
  }

  openDataPostModal(eventObject:ResourcePostObject){
    this.crDataPostStatusObject = {
      heading:eventObject.resourcePathList.length+" Resources are ready to be copied",
      subheading:"Please wait while files are processing",
      type:''
    };
    this.dataPostModalOpen = true;
    this.crDataPostObject = eventObject;
  }

  closeDataPostModal(){
    this.dataPostModalOpen = false;
  }

  openImagePopup(pic:ResourceObject){
    this.popupOpen = true;
    this.popupImageObject = pic;
  }

  closeImagePopup(){
    this.popupOpen = false;
    this.popupImageObject = null;
  }

  openCreateFolderPopup(){
    this.createResourceContainerPopupOpen = true;
  }

  closeCreateFolderPopup(){
    this.createResourceContainerPopupOpen = false;
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
  
  public loginStatusChange(profile:AuthenticatedUserProfile){
    this.signedIn = true;
  }

  public logout(){
    CommonUtilService.removeUserFromLocalStorage();
    this.signedIn = false;
  }


  

}
