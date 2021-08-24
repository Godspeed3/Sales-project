import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson [] = [
    new SalesPerson("Audrey", "Clark", "a.c@gmail.com", 50),
    new SalesPerson("Cam", "Tomlin", "c.t@gmail.com", 20), 
    new SalesPerson("Caleb", "Beals", "c.b@gmail.com", 600)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
