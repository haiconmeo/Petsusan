import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../css/style.css', './../css/bootstrap.min.css', ]
})
export class AppComponent {

  public check1 : boolean = false;
  public check2 : boolean = false;
  public check3 : boolean = false;
  public check4 : boolean = false;
  public check5 : boolean = false;
  public check6 : boolean = false;

  click1(){
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
    this.check6 = false;
  }
  click2(){
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
    this.check6 = false;
  }

  click3(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
    this.check5 = false;
    this.check6 = false;
  }

  click4(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
    this.check5 = false;
    this.check6 = false;
  }
  click5(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = true;
    this.check6 = false;
  }
  click6(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
    this.check6 = true;
  }


  title = 'Front';
}
