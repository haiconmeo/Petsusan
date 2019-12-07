import { Component, OnInit } from '@angular/core';
import { ListCartService } from '../_services/list-cart.service';
import { Cart } from '../_models/list-cart.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '.././../css/style.css', ]
})
export class CartComponent implements OnInit {

  public carts : Cart[] =[];
  public cart : Cart = null;
  public total : number =0;
  constructor(
    public cartService : ListCartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.showCart();
    this.tinhtien();
  }

  showCart(){
    this.cartService.getAllCart().subscribe((cart) =>{
      this.carts = cart;
      this.tinhtien();
    });
  }
  tinhtien(){
    console.log(this.carts)
    if(this.total == 0){
      for( var i=0; i<this.carts.length; i++){
        this.total += this.carts[i].price*this.carts[i].age;   
      }
    }
    else{
      this.total =0;
      for( var i=0; i<this.carts.length; i++){
        this.total += this.carts[i].price*this.carts[i].age;   
      }
    }
    
    return this.total;
  }

  delete(id: number){
    this.cartService.delete(id).subscribe((data)=>{
        let index = this.updateDelete(id);
        this.carts.splice(index, 1);
        this.tinhtien();
    });
  }

  edit(cart: Cart){
    this.cart = cart;
  }

  plusQunatity(){
    console.log(this.cart)
    this.cartService.update(this.cart).subscribe(data =>{
    })
  }

  updateDelete(id: number) : number{
  let resul =0;
  this.carts.forEach((cart, index) =>{
    if(cart.id == id){
      resul = index;
    }
  })
   return resul;
  }

}
