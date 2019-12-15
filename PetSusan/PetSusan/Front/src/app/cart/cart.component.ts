import { Component, OnInit } from '@angular/core';
import { ListCartService } from '../_services/list-cart.service';
import { Cart } from '../_models/list-cart.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { Cart_item } from '../_models/cart_Item';
import { GioiHang } from '../_entities/gioihang';
import { GioiHang2 } from '../_entities/giohang2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '.././../css/style.css', ]
})
export class CartComponent implements OnInit {

  public carts : Cart[] =[];
  public carts_manh : Cart_item[] =[];
  public cart : GioiHang2;
  public total : number =0;
  public total_pet : number =0;
  public total_item : number =0;


  constructor(
    public cartService : ListCartService,
    private route: ActivatedRoute,
    private stdservice : AuthService,
  ) {
    
   }
    id:number
  ngOnInit() {
    this.showCart();
    
  }

  showCart(){
    this.stdservice.loadUser().subscribe(
      re=>{
        this.id=re["id"],
      this.cartService.getAllCart(this.id).subscribe(a=>{this.carts_manh = a;
      for( var i=0; i<this.carts_manh.length; i++){
        this.total += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        if(this.carts_manh[i].item.pet === true){
          this.total_pet += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }
        else{
          this.total_item += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }
          
      }}
      );
    
  }
  );
  
}
  tinhtien(){
    console.log(this.carts)
    if(this.total == 0){
      for( var i=0; i<this.carts_manh.length; i++){
        this.total += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        if(this.carts_manh[i].item.pet === true){
          this.total_pet += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }
        else{
          this.total_item += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }   
      }
    }
    else{
      this.total =0;
      this.total_pet =0;
      this.total_item =0;
      for( var i=0; i<this.carts_manh.length; i++){
        this.total += this.carts_manh[i].item.price*this.carts_manh[i].quantity;   
        if(this.carts_manh[i].item.pet === true){
          this.total_pet += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }
        else{
          this.total_item += this.carts_manh[i].item.price*this.carts_manh[i].quantity;
        }
      }
    }
    return this.total;
  }

  delete(id: number){
    this.cartService.delete(id).subscribe((data)=>{
        let index = this.updateDelete(id);
        this.carts_manh.splice(index, 1);
        this.tinhtien();
    });
  }

  edit(cart: Cart_item){
    // this.cart.id =cart.id
    // this.cart.item=cart.item.id;
    // this.cart.note="";
    // this.cart.quantity=cart.quantity;
    // this.cart.user=cart.user;
    // this.cart.status=cart.status;
    console.log(cart.item.id)
    // this.plusQunatity()
    var x : GioiHang2={
      item: cart.item.id,
    quantity: cart.quantity,
    id:cart.id,
     status: false,
    
    user: cart.user,
  note:""
    }
    this.cartService.update(x).subscribe(data =>{
    })
  }


  updateDelete(id: number) : number{
  let resul =0;
  this.carts_manh.forEach((cart, index) =>{
    if(cart.id == id){
      resul = index;
    }
  })
   return resul;
  }

}
