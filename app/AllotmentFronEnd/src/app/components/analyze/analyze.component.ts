import { Component, OnInit } from '@angular/core';
import {GridDataHandlingService} from '../../services/grid-data-handling.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  topicEl:any = {
    src:''
  };
  constructor(private route: ActivatedRoute,private griddatamngr:GridDataHandlingService) { 

  }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
      if(params.resourcePath){
        this.topicEl.src = this.griddatamngr.decryptPath(params.resourcePath);
      }

    });
  }

}
