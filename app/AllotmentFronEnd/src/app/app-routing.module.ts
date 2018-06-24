import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumFolderGridComponent } from './components/album-folder-grid/album-folder-grid.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'page404',component:PageNotFoundComponent},
  { path: 'album/:childpath', component: AlbumFolderGridComponent },
  {path:'**',redirectTo:'page404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
