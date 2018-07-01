import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input,ViewChild } from '@angular/core';

@Component({
  selector: 'app-general-photo',
  templateUrl: './general-photo.component.html',
  styleUrls: ['./general-photo.component.css']
})
export class GeneralPhotoComponent implements OnInit {

  @Input() imageSource:string;
  @ViewChild('photo') photo:HTMLImageElement;
  loaded:boolean = false;

  constructor(private route: ActivatedRoute) { 

  }

  onLoad(){
    this.loaded = true;
  }

  ngOnInit() {

  this.route.params.subscribe((params)=>{
    if(params['imagesource']){
      this.imageSource = params['imagesource'];
    }
  })

  }

}
