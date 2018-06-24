import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-folder-grid',
  templateUrl: './album-folder-grid.component.html',
  styleUrls: ['./album-folder-grid.component.css']
})
export class AlbumFolderGridComponent implements OnInit {

  childpath = '';
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.childpath = params['childpath'];
    });
  }

}
