import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class LoginComponent implements OnInit {
  
  public check1 : boolean = true;
  public check2 : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  kt1(){
    this.check1 = true;
    this.check2 = false;
    console.log(this.check1)
  }
  kt2(){
    this.check1 = false;
    this.check2 = true;
    console.log(this.check1)
  }
 
}
