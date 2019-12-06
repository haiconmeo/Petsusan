import { Component, OnInit } from '@angular/core';
import {Profile} from './../_entities/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class ProfileComponent implements OnInit {
  profile : Profile={
    
    avatar: "http://localhost:8000/img/no-img.jpg",
    phonenum: "0987654765",
    birth_date: null,
    cmmd: "19767889",
    user: 1,
    address: "",
    tinh:null,
    huyen:null,
    xa :null,
  }
  constructor() { }

  ngOnInit() {
  }

}
