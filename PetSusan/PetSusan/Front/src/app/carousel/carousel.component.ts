import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ListAiService } from '../_services/list-ai.service';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { List } from '../_models/list-item.class';
import { List_AI } from '../_models/list-ai.class';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['.././../css/style.css',  '../../css/bootstrap.min.css', './carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public items  : List_AI[]=[];
  // public items : List[]=[];
  public id: number;


  constructor(
    private stdservice : AuthService,
    private aisv : ListAiService,
  ) {}

  public ngOnInit() {
    this.checkLogin();
    this.show();
  }

  checkLogin(){
    this.stdservice.loadUser().subscribe(re=>{
      this.id=re["id"]
      console.log(this.id);
    });
  }

  show(){
    this.aisv.getAllItems(7).subscribe(data=>{
      this.items = data;
      
      console.log(data)
    });
  }
  
  // items = [
  //   {  name: 'Dog', image: "assets/dog1.jpg" },
  //   {  name: 'Cat' , image: "assets/cat1.jpg"},
  //   {  name: 'Mouse' , image: "assets/mouse1.jpg"},
  //   {  name: 'Snake', image: "assets/snake2.jpg" },
  //   {  name: 'Fish' , image: "assets/fish1.jpg"},
  //   {  name: 'Rabbit', image: "assets/rabbit1.jpg" },
  //   {  name: 'House' , image: "assets/house1.jpg"},
  //   {  name: 'Fox' , image: "assets/fox1.jpg"},
  //   {  name: 'Dragon' , image: "assets/dragon1.jpg"},
   
  // ];

}
