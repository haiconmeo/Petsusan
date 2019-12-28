import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css', ]
})
export class PetComponent implements OnInit {

  constructor() { }

  pets = [
    {  name: 'Dog', image: "assets/dog1.jpg" },
    {  name: 'Cat' , image: "assets/cat1.jpg"},
    {  name: 'Mouse' , image: "assets/mouse1.jpg"},
    {  name: 'Snake', image: "assets/snake2.jpg" },
    {  name: 'Fish' , image: "assets/fish1.jpg"},
    {  name: 'Rabbit', image: "assets/rabbit1.jpg" },
    {  name: 'House' , image: "assets/house1.jpg"},
    {  name: 'Fox' , image: "assets/fox1.jpg"},
    {  name: 'Dragon' , image: "assets/dragon1.jpg"},
   
  ];
 
  ngOnInit() {
    
  }

}
