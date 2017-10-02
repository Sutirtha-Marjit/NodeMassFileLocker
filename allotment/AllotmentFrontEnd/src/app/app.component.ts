import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  signedIn:boolean = true;

  constructor(){

  }

  ngOnInit(){
    
  }
  
  public loginStatus(){
    alert('DONE');
  }


  

}
