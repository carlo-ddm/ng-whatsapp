import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralBoxComponent } from "./components/central-box/central-box.component";
import { LeftPartCentralBoxComponent } from './components/left-part-central-box/left-part-central-box.component';
import { RightPartCentralBoxComponent } from './components/right-part-central-box/right-part-central-box.component';
import { SelectDirective } from './directives/select.directive';

@NgModule({
  declarations: [
    AppComponent,
    CentralBoxComponent,
    LeftPartCentralBoxComponent,
    RightPartCentralBoxComponent,
    SelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
