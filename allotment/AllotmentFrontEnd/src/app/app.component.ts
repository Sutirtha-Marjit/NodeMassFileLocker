import { OnInit, Component } from '@angular/core';
import {ResourceObject} from './shared/datatypes';
import {MockDataProviderService} from './services/mock-data-provider.service';
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

  constructor(){
    this.mockInitialData = MockDataProviderService.getMockData();
  }

  ngOnInit(){
    this.localImagePool = this.mockInitialData;
    console.log(this.localImagePool);
  }

  public evalImageProp(event:Event){
    var img:HTMLImageElement = <HTMLImageElement>event.currentTarget;
   
    
  }

  public resetCurrentSelectedObject(){
    this.CurrentSelectedObjects = [];
  }

  public setCurrentObject(index:number){
    this.localImagePool[index].opted = true;
    this.CurrentSelectedObjects.push(this.localImagePool[index]);
  }

  public unSetCurrentObject(index:number){
    
  }
  
  public loginStatus(e:Event){
    e.preventDefault();
    alert('ok');
  }


  

}
