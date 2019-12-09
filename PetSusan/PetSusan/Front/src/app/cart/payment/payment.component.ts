import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListCartService } from '../../_services/list-cart.service';
import { Cart } from '../../_models/list-cart.class';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { Cart_item } from '../../_models/cart_Item';
declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', '.././../../css/style.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  public carts : Cart[] =[];
  public carts_manh : Cart_item[] =[];
  public total : number =0;

  constructor(
    public cartService : ListCartService,
    private stdservice : AuthService,
  ) { }

  paidFor = false;

  ngOnInit() {
    this.showCart()
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                // description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.total
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
   showCart(){
    this.stdservice.loadUser().subscribe(
      re=>{  var id=re["id"]
    this.cartService.getAllCart(id).subscribe((cart) =>{
      this.carts_manh = cart;
      console.log(this.carts_manh)
      for( var i=0; i<this.carts_manh.length; i++){
        this.total += this.carts_manh[i].item.price*this.carts_manh[i].quantity;   
      }});
      return this.total;
    });
  }
    
}


