import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
