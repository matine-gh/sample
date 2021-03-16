import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, HostListener } from '@angular/core';
// import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll(){
    // debugger;
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      // debugger;
      // document.getElementById("header").className = "down";
      (document.getElementById('header') as HTMLFormElement).className = "down";
    }
  }


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // window.onscroll = function() {scroll()};
    // let f = document.getElementById("header");
    // console.log(f)
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void{
    // debugger;
    var s = (document.getElementById('header') as HTMLFormElement);
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      s.classList.add('down');
    }else{
      s.classList.remove('down');
    }
  }


}
