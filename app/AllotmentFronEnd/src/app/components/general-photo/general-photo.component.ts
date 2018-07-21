import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input,ViewChild } from '@angular/core';

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

  constructor(private route: ActivatedRoute) { 

  }

  onLoad(){
    this.loaded = true;
  }

  ngOnInit() {
  
  this.passivePath = btoa(this.imageSource);  
  
  }

}
