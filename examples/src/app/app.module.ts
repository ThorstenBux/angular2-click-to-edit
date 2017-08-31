import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularClickToEditModule } from "./ndv/angular-click-to-edit.module";


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularClickToEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
