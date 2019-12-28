import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['.././../css/style.css',]
})
export class HomeComponent implements OnInit {

  public username:string;

  constructor(
    private stdservice : AuthService,
  ) {
    this.checkLogin()
   }

  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=> {this.username=re["username"]}
      
    );
    
 }

  pets = [
    {  name: 'Dog', image: "assets/dog1.jpg" },
    {  name: 'Cat' , image: "assets/cat1.jpg"},
    {  name: 'Mouse' , image: "assets/mouse1.jpg"},
  ]
  ngOnInit() {
  }

}
