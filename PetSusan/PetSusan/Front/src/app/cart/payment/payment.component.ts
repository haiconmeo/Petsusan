import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListCartService } from '../../_services/list-cart.service';
import { Cart } from '../../_models/list-cart.class';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', '.././../../css/style.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  public carts : Cart[] =[];
  public total : number =0;

  constructor(
    public cartService : ListCartService,
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
    this.cartService.getAllCart().subscribe((cart) =>{
      this.carts = cart;
      console.log(this.carts)
      for( var i=0; i<this.carts.length; i++){
        this.total += this.carts[i].price*this.carts[i].age;   
      }
      return this.total;
    });
  }
    
}


