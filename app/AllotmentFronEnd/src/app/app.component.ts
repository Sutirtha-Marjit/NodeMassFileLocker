import { Component } from '@angular/core';
import {GridDataHandlingService} from './services/grid-data-handling.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  
  constructor(private griddatamngr:GridDataHandlingService){

  }

  getCahce(){
    return Object.keys(this.griddatamngr.MASTER_CACHE).length+'OKOK';
  }

  
}
