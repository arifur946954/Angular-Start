import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component bootstarp.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  //create an array of object
  salePersonList:SalesPerson[]=[
    new SalesPerson("Arifur","Rahman","arif@gmail.com",10000),
    new SalesPerson("Test1","Tester1","test1@gmail.com",50001),
    new SalesPerson("Test2","Tester2","test3@gmail.com",60002),
    new SalesPerson("Test3","Tester3","test3@gmail.com",10003)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
