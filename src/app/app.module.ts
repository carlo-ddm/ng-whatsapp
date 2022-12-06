import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralBoxComponent } from "./components/central-box/central-box.component";
import { LeftPartCentralBoxComponent } from './components/left-part-central-box/left-part-central-box.component';
import { RightPartCentralBoxComponent } from './components/right-part-central-box/right-part-central-box.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CentralBoxComponent,
    LeftPartCentralBoxComponent,
    RightPartCentralBoxComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
