import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ListAiService } from '../_services/list-ai.service';
import { List_AI } from '../_models/list-ai.class';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['.././../css/style.css',  '../../css/bootstrap.min.css', './carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public items  : List_AI[]=[];
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
      this.id=re["id"];
      
    });
  }

  show(){
    console.log(this.id)
    this.stdservice.loadUser().subscribe(re=>{
      this.id=re["id"];
      this.aisv.getAllItems(this.id).subscribe(data=>{
      this.items = data;
      
    });
      
    });
  
  }
  

}
