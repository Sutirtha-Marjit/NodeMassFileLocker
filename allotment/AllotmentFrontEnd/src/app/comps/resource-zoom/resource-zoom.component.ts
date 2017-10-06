import { Component, OnInit ,Input} from '@angular/core';
import {ResourceObject} from '../../shared/datatypes';

@Component({
  selector: 'app-resource-zoom',
  templateUrl: './resource-zoom.component.html',
  styleUrls: ['./resource-zoom.component.css']
})
export class ResourceZoomComponent implements OnInit {
  @Input() popupImageObject:ResourceObject;
  constructor() { }

  ngOnInit() {
  }

}
