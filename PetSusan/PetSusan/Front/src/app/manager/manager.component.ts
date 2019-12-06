import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css', '../../css/bootstrap.min.css','.././../css/style.css',]
})
export class ManagerComponent implements OnInit {
  
  public check1 : boolean = true;
  public check2 : boolean = false;
  public check3 : boolean = false;
  public check4 : boolean = false;
  public check5 : boolean = false;
  

  constructor() { }

  ngOnInit() {

  }

  checkPet(){
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
  }

  checkItem(){
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
  }
  checkDoanhThu(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
    this.check5 = false;
  }
  checkUser(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
    this.check5 = false;
  }
  checkContact(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = true;
  }

}
