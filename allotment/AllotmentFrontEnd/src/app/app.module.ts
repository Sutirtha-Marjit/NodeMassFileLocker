import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllotmentConsoleComponent } from './comps/allotment-console/allotment-console.component';

@NgModule({
  declarations: [
    AppComponent,
    AllotmentConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
