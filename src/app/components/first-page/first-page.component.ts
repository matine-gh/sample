import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  slides = [
    // { image: ''},
    { image: '../../../assets/images/bg_1.jpg'},
    { image: '../../../assets/images/bg_2.jpg'},
    { image: '../../../assets/images/bg_3.jpg'}
    ];

    

  constructor() { }

  ngOnInit(): void {
  }

}
