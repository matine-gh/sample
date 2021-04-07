import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, HostListener } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatDividerHarness} from '@angular/material/divider/testing';
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
      (document.getElementById('header') as HTMLFormElement).className = "down";
    }
  }


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
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

  myFunction() {
    debugger;
    var x = document.getElementById("myTopnav");
    if (x != null) {
      var index = x.classList[0];
      if (index === "topnav") {
        x.className = "responsive topnav";

      } else {
        x.className = "topnav";
      }
    }
  }
    


}
