import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ChartModule} from 'angular-highcharts';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AlbumFolderGridComponent } from './components/album-folder-grid/album-folder-grid.component';
import { FolderElementComponent } from './components/folder-element/folder-element.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GeneralPhotoComponent } from './components/general-photo/general-photo.component';
import { AlphabetsComponent } from './components/alphabets/alphabets.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { ExplorerComponent,FileElementLink } from './components/explorer/explorer.component';
import { ReportDashboardComponent } from './components/report-dashboard/report-dashboard.component';
import { ShiftResourceComponent } from './components/shift-resource/shift-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumFolderGridComponent,
    FolderElementComponent,
    PageNotFoundComponent,
    GeneralPhotoComponent,
    AlphabetsComponent,
    CarouselComponent,
    AnalyzeComponent,
    ExplorerComponent,
    FileElementLink,
    ReportDashboardComponent,
    ShiftResourceComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartModule,
    NgbModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
