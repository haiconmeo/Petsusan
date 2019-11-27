import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class ItemsComponent implements OnInit {

  constructor() { }

  items = [
    {  name: 'Dog', country: "assets/dog1.jpg" },
    {  name: 'Cat' , country: "assets/cat1.jpg"},
    {  name: 'Fox' , country: "assets/fox1.jpg"},
    {  name: 'Snake', country: "assets/dog1.jpg" },
    {  name: 'House' , country: "assets/cat1.jpg"},
    {  name: 'Fish' , country: "assets/fox1.jpg"},
    {  name: 'Sheep', country: "assets/dog1.jpg" },
    {  name: 'Hamter' , country: "assets/cat1.jpg"},
    {  name: 'Dragon' , country: "assets/fox1.jpg"},
   
  ];


  ngOnInit() {
  }

}
