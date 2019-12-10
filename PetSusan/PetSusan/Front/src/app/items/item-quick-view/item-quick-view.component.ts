import { Component, OnInit } from '@angular/core';
import { GioiHang } from 'src/app/_entities/gioihang';
import { ActivatedRoute, Router } from '@angular/router';
import { ListItemsService } from 'src/app/_services/list-items.service';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-item-quick-view',
  templateUrl: './item-quick-view.component.html',
  styleUrls: ['.././../../css/style.css', '.././../../css/bootstrap.min.css', ]
})
export class ItemQuickViewComponent implements OnInit {
  id:number;
  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=> this.id=re["id"]
    );}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public detail : ListItemsService,
    private stdservice : AuthService,
  ) {this.checkLogin()}


  ngOnInit() {
  }
  add(id_item){
    var   buy :GioiHang={
      item: id_item ,
      quantity: 1,
      
      status: false,
      note:"haizz",
      user: this.id
    }
    this.detail.put_item(buy);
    console.log("ma item:",buy)
  }
}
