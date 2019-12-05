import { Component, OnInit } from '@angular/core';
import { Cart } from './_models/list-cart.class';
import { ListCartService } from './_services/list-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../css/style.css', './../css/bootstrap.min.css', ]
})
export class AppComponent {
  public soluong : number =0;
  public carts : Cart[] =[];

  public check1 : boolean = false;
  public check2 : boolean = false;
  public check3 : boolean = false;
  public check4 : boolean = false;
  public check6 : boolean = false;


  constructor(
    public cartService : ListCartService,
  ) { }


  click1(){
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check6 = false;
  }
  click2(){
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
    this.check6 = false;
  }

  click3(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
    this.check6 = false;
  }

  click4(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
    this.check6 = false;
  }
  click6(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check6 = true;
  }

  showCart(){
    this.cartService.getAllCart().subscribe((cart) =>{
      this.carts = cart;
      this.soluong = this.carts.length; 
      console.log(this.soluong)

    });
  }

  update(id: number) : number{
  let resul =0;
  this.carts.forEach((cart, index) =>{
    if(cart.id == id){
      resul = index;
    }
  })
   return resul;
  }

  ngOnInit() {
    this.showCart();
  }


  title = 'Front';
}
