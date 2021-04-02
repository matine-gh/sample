import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

   slides: { image: string, text: string }[] = [
    { "image": '../../../assets/images/bg_1.jpg', "text": "The Best Coffee Testing Experience" },
    { "image": '../../../assets/images/bg_2.jpg', "text": "Amazing Taste & Beautiful Place" },
    { "image": '../../../assets/images/bg_3.jpg', "text": "Creamy Hot and Ready to Serve" }
   ];
    


  // slides = [
  //   { image: '../../../assets/images/bg_1.jpg'},
  //   { image: '../../../assets/images/bg_2.jpg'},
  //   { image: '../../../assets/images/bg_3.jpg'}
  //   ];

    

  constructor() { }

  ngOnInit(): void {
  }

}
