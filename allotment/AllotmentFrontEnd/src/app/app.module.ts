import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllotmentConsoleComponent } from './comps/allotment-console/allotment-console.component';
import { ResourceZoomComponent } from './comps/resource-zoom/resource-zoom.component';
import { DataPostModalComponent } from './comps/data-post-modal/data-post-modal.component';
import { SigninComponent } from './comps/signin/signin.component';
import { CreateResourceContainerComponent } from './comps/create-resource-container/create-resource-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AllotmentConsoleComponent,
    ResourceZoomComponent,
    DataPostModalComponent,
    SigninComponent,
    CreateResourceContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
