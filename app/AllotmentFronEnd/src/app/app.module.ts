import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AlbumFolderGridComponent } from './components/album-folder-grid/album-folder-grid.component';
import { FolderElementComponent } from './components/folder-element/folder-element.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GeneralPhotoComponent } from './components/general-photo/general-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumFolderGridComponent,
    FolderElementComponent,
    PageNotFoundComponent,
    GeneralPhotoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
