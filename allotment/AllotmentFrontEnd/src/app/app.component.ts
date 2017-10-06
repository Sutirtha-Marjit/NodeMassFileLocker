import { OnInit, Component } from '@angular/core';
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
  CurrentSelectedObjects:Array<ResourceObject>=[];
  signedIn:boolean = true;
  localImagePool:Array<ResourceObject> = [];
  mockInitialData = [];

  constructor(private http:HttpClient){
    if( "dev" === CommonUtilService.getEnvironment() ){
      CommonUtilService.adjustDevProdEnv();
    }  
    
    this.mockInitialData = MockDataProviderService.getMockData();
    
  }

  ngOnInit(){
    this.localImagePool = this.mockInitialData;
    console.log(this.localImagePool);
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
