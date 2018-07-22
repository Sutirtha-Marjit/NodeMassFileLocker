import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {GridDataHandlingService} from '../../services/grid-data-handling.service'

@Component({
  selector: 'app-general-photo',
  templateUrl: './general-photo.component.html',
  styleUrls: ['./general-photo.component.css']
})
export class GeneralPhotoComponent implements OnInit {

  @Input() imageSource:string;
  @Input() serverAccessPathToCurrentFolder:string;
  @ViewChild('photo') photo:HTMLImageElement;
  @Input() serial:number = 0;
  isDirectURL:boolean = false;
  passivePath:string='';
  loaded:boolean = false;

  constructor(private route: ActivatedRoute,private grdDataMngr:GridDataHandlingService) { 

  }

  onLoad(){
    this.loaded = true;
  }

  ngOnInit() {
  console.log(this.imageSource);
  this.passivePath = this.grdDataMngr.encryptPath(this.imageSource);  
  
  }

}
