import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { format } from 'url';
import { GioiHang } from 'src/app/_entities/gioihang';
import { Cart_item } from 'src/app/_models/cart_Item';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ListCartService } from 'src/app/_services/list-cart.service';
import { Cart_item_admin } from 'src/app/_models/cart_item_admin';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['../manager.component.css', '../../../css/style.css']
})
export class RevenueComponent implements OnInit {
  list_gio_hang:Cart_item_admin[]=[]
  constructor(
    private stdservice : AuthService,
    public cartService : ListCartService,
  ) { }
  dowload(){
    this.cartService.download()
  }
  ngOnInit() {
    this. showCart();
  }
  
  showCart(){
    
      this.cartService.getCart().subscribe(a=>{this.list_gio_hang = a     
     
    
  }
  );
  
}
}
