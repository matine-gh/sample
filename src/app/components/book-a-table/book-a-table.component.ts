import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Time } from 'src/app/interfaces/time';
@Component({
  selector: 'app-book-a-table',
  templateUrl: './book-a-table.component.html',
  styleUrls: ['./book-a-table.component.scss']
})
export class BookATableComponent implements OnInit {

  Times: Time[] = [
    {value: '12:00', unit: 'am'},
    {value: '12:30', unit: 'am'},
    {value: '1:00', unit: 'am'},
    {value: '1:30', unit: 'am'},
    {value: '2:00', unit: 'am'},
    {value: '2:30', unit: 'am'},
    {value: '3:00', unit: 'am'},
    {value: '3:30', unit: 'am'},
    {value: '4:00', unit: 'am'},
    {value: '4:30', unit: 'am'},
    {value: '5:00', unit: 'am'},
    {value: '5:30', unit: 'am'},
    {value: '6:00', unit: 'am'},
    {value: '6:30', unit: 'am'},
    {value: '7:00', unit: 'am'},
    {value: '7:30', unit: 'am'},
    {value: '8:00', unit: 'am'},
    {value: '8:30', unit: 'am'},
    {value: '9:00', unit: 'am'},
    {value: '9:30', unit: 'am'},
    {value: '10:00', unit: 'am'},
    {value: '10:30', unit: 'am'},
    {value: '11:00', unit: 'am'},
    {value: '11:30', unit: 'am'},
    {value: '12:00', unit: 'pm'},
    {value: '12:30', unit: 'pm'},
    {value: '1:00', unit: 'pm'},
    {value: '1:30', unit: 'pm'},
    {value: '2:00', unit: 'pm'},
    {value: '2:30', unit: 'pm'},
    {value: '3:00', unit: 'pm'},
    {value: '3:30', unit: 'pm'},
    {value: '4:00', unit: 'pm'},
    {value: '4:30', unit: 'pm'},
    {value: '5:00', unit: 'pm'},
    {value: '5:30', unit: 'pm'},
    {value: '6:00', unit: 'pm'},
    {value: '6:30', unit: 'pm'},
    {value: '7:00', unit: 'pm'},
    {value: '7:30', unit: 'pm'},
    {value: '8:00', unit: 'pm'},
    {value: '8:30', unit: 'pm'},
    {value: '9:00', unit: 'pm'},
    {value: '9:30', unit: 'pm'},
    {value: '10:00', unit: 'pm'},
    {value: '10:30', unit: 'pm'},
    {value: '11:00', unit: 'pm'},
    {value: '11:30', unit: 'pm'}
  ];
  
  // selectedTime: string;

  constructor() { }

  ngOnInit(): void {
  }

}
