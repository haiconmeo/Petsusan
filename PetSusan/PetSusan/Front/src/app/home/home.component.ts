import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['.././../css/style.css',]
})
export class HomeComponent implements OnInit {

  constructor() { }

  pets = [
    {  name: 'Dog', image: "assets/dog1.jpg" },
    {  name: 'Cat' , image: "assets/cat1.jpg"},
    {  name: 'Mouse' , image: "assets/mouse1.jpg"},
  ]
  ngOnInit() {
  }

}
