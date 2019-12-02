import { Component, OnInit } from '@angular/core';
import { List } from '../_models/list-item.class';
import { Subscription } from 'rxjs';
import { ListItemsService } from '../_services/list-items.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '.././../css/style.css', ]
})
export class CartComponent implements OnInit {

  public message: string;
  private valueFromChildSubscription: Subscription;
  constructor(
    public cartService : ListItemsService,
  ) { }

  ngOnInit() {
    this.cartService.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.cartService.changeMessage('Hello from Sibling');
  }

}
