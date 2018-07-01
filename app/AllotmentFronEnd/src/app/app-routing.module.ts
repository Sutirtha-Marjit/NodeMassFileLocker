import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumFolderGridComponent } from './components/album-folder-grid/album-folder-grid.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { GeneralPhotoComponent } from './components/general-photo/general-photo.component';

const routes: Routes = [
  {path:'page404',component:PageNotFoundComponent},
  {path: 'album/:childpath/:pagenumber/:pagesize', component: AlbumFolderGridComponent },
  {path: 'album/:childpath/:pagenumber', component: AlbumFolderGridComponent },
  {path: 'album/:childpath', component: AlbumFolderGridComponent },
  {path: 'photo/:imagesource',component:GeneralPhotoComponent},
  {path:'**',redirectTo:'page404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
