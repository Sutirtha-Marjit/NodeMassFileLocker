import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';
import {CompleteFolderResponse, ServerFolderObject} from '../../interfaces/datatypes';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  foldersource:string = '';
  itemnumber:number = 0;
  carouselData:CompleteFolderResponse = null;
  cStyle:any = {};
  activeView='';
  positionStatusObject:any =  {
    index:0,
    total:0,
    currentFolder:''
  };
  constructor(private route: ActivatedRoute,private router:Router,private griddatamngr:GridDataHandlingService) { 
    this.cStyle.W = '2222000%';
    this.cStyle.w = '8.8%';
    this.cStyle.t = 0;
    this.positionStatusObject = {
      index:0,
      total:0,
      currentFolder:''
    }
  }

  toggleActiveView(){
    if(this.activeView.length>0){
      this.activeView = '';
    }else{
      this.activeView='fullview';
    }
  }

  getScrollPosition(){
    let r = this.itemnumber*(-1)*this.cStyle.t;

    return 'translateX('+r+'%)';
  }

  private decorateCarousel(){
    this.griddatamngr.requestServerFolder(this.foldersource,(carouselData)=>{
      this.carouselData = carouselData;
      
      this.positionStatusObject.total = this.carouselData.data.resultObject.length;
      this.cStyle = {
        W:`${this.carouselData.data.resultObject.length*100}%`,
        w:`${100/this.carouselData.data.resultObject.length}%`,
        t:100/this.carouselData.data.resultObject.length
      }
      
    },(error)=>{

    })
  }

  caroselNav(signal:boolean){
    if(signal){
      this.itemnumber++;
    }else{
      this.itemnumber--;
    }
    let arr = this.router.url.split('/');
    let p = (arr.splice(0,arr.length-1).join('/'))+'/'+this.itemnumber;
    this.router.navigateByUrl(p);
    this.positionStatusObject.index = (this.itemnumber+1);

  }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
        this.foldersource = params['foldersource'];
        this.itemnumber = params['itemnumber'] || 0 ;
        
        this.decorateCarousel();
    });
  }

}
