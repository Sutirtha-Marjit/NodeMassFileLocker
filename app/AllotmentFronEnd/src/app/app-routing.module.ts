import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumFolderGridComponent } from './components/album-folder-grid/album-folder-grid.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { GeneralPhotoComponent } from './components/general-photo/general-photo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AnalyzeComponent} from './components/analyze/analyze.component';

const routes: Routes = [
  {path:'page404',component:PageNotFoundComponent},
  {path: 'album/:childpath/:pagenumber/:pagesize', component: AlbumFolderGridComponent },
  {path: 'album/:childpath/:pagenumber', component: AlbumFolderGridComponent },
  {path: 'album/:childpath',component: AlbumFolderGridComponent},
  {path: 'photo',component:GeneralPhotoComponent},
  {path: 'photo/:foldersource',component:CarouselComponent},
  {path: 'photo/:foldersource/:itemnumber',component:CarouselComponent},
  {path: 'analyze',component:AnalyzeComponent},
  {path: 'analyze/:resourcePath',component:AnalyzeComponent},
  {path:'**',redirectTo:'page404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
