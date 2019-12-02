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
  public total: number = 0;
  constructor(
    public cartService : ListCartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.showCart();
  // console.log(this.delete(2))
  }

  showCart(){
    this.cartService.getAllCart().subscribe((cart) =>{
      this.carts = cart
    });
  }

  delete(id: number){
    this.cartService.delete(id).subscribe((data)=>{
        // this.updateDelete(id);
        // console.log(data)
        let index = this.updateDelete(id);
        this.carts.splice(index, 1);

    });
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
