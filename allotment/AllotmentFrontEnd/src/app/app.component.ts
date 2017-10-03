import { OnInit, Component } from '@angular/core';
import {ResourceObject} from './shared/datatypes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  CurrentSelectedObject:ResourceObject=null;
  signedIn:boolean = true;
  localImagePool:Array<ResourceObject> = [
    {width:0, height:0, loaded:false, sourcePath:"https://thumbs.dreamstime.com/z/close-up-lion-s-head-8-years-panthera-leo-6004294.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://t4.ftcdn.net/jpg/00/47/11/79/500_F_47117920_JeALgAgLrZpUH1l5Cc5b7YLLMur2O3iY.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://thumbs.dreamstime.com/z/close-up-lion-s-head-8-years-panthera-leo-6004294.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://thumbs.dreamstime.com/z/close-up-lion-s-head-8-years-panthera-leo-6004294.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"http://images.indianexpress.com/2016/08/rrain-759.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://thumbs.dreamstime.com/z/close-up-lion-s-head-8-years-panthera-leo-6004294.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://thumbs.dreamstime.com/z/close-up-lion-s-head-8-years-panthera-leo-6004294.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg", targetPath:""},
    {width:0, height:0, loaded:false,sourcePath:"https://files2.coloribus.com/files/adsarchive/part_1419/14190055/file/nehru-zoological-park-lion-small-62142.jpg", targetPath:""},


  ];

  constructor(){

  }

  ngOnInit(){
    
  }

  public evalImageProp(event:Event){
    var img:HTMLImageElement = <HTMLImageElement>event.currentTarget;
    if(this.CurrentSelectedObject.sourcePath.indexOf(img.src)!==-1){
      this.CurrentSelectedObject.loaded = true;
      this.CurrentSelectedObject.height = img.height;
      this.CurrentSelectedObject.width = img.width;
    }
    
  }

  public setCurrentObject(index:number){
    this.CurrentSelectedObject = this.localImagePool[index];
  }
  
  public loginStatus(e:Event){
    e.preventDefault();
    alert('ok');
  }


  

}
