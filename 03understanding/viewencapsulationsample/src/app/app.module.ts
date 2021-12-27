import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
