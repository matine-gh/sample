import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationComponent } from './components/information/information.component';
import { BookATableComponent } from './components/book-a-table/book-a-table.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Section2Component } from './components/section2/section2.component';
import { OurMenuComponent } from './components/our-menu/our-menu.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { BESTComponent } from './components/best/best.component';

// import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    FirstPageComponent,
    InformationComponent,
    BookATableComponent,
    Section2Component,
    OurMenuComponent,
    NumbersComponent,
    BESTComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatGridListModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
