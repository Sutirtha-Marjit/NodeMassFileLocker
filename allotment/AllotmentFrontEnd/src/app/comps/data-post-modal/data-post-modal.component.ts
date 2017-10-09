import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-data-post-modal',
  templateUrl: './data-post-modal.component.html',
  styleUrls: ['./data-post-modal.component.css']
})
export class DataPostModalComponent implements OnInit {

  @Input() status:string;
  constructor() { 

  }

  ngOnInit() {
  }

}
