import { Component, OnInit, Input } from '@angular/core';
import {CommonUtilService} from '../../services/common-util.service';

@Component({
  selector: 'app-explore-dest',
  templateUrl: './explore-dest.component.html',
  styleUrls: ['./explore-dest.component.css']
})
export class ExploreDestComponent implements OnInit {

  @Input() givenContainers:any;
  public CommonUtilService = CommonUtilService;
  constructor() { }
  
  ngOnInit() {
    console.log('ExploreDestComponent');
    console.log(this.givenContainers);
  }

}
