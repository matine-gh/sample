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
      // document.getElementById("header").className = "down";
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
      var classList = x.classList;
      var classListArray: string[] = []
      classList.forEach(element => {
        debugger
        classListArray.push(element)
      });
      var index = x.classList[0];
      if (index === "topnav") {
        // classListArray.push("responsive");
        // x.className += " responsive";
        // x.className.replace("col-md-8","");
        x.className = "topnav responsive";
        // classListArray.splice(1,2);
        // classListArray.forEach(element => {
        //   if (x != null) {
        //     x.className += element;
        //   }
        // });
      } else {
        x.className = "topnav";
      }
    }
  }
    


}
