import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css', ]
})
export class PetComponent implements OnInit {

  constructor() { }

  pets = [
    {  name: 'Dog', country: "assets/dog1.jpg" },
    {  name: 'Cat' , country: "assets/cat1.jpg"},
    {  name: 'Fox' , country: "assets/fox1.jpg"},
    {  name: 'Snake', country: "" },
    {  name: 'House' , country: ""},
    {  name: 'Fish' , country: ""},
    {  name: 'Sheep', country: "" },
    {  name: 'Hamter' , country: ""},
    {  name: 'Dragon' , country: ""},
   
  ];
  
  ngOnInit() {
    
  }

}
