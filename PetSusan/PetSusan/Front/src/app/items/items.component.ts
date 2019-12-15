import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../_services/list-items.service';
import { List } from '../_models/list-item.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GioiHang } from '../_entities/gioihang';
import { AuthService } from '../_services/auth/auth.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['.././../css/style.css',  ]
})
export class ItemsComponent implements OnInit{

  public list : List[] =[];
  public count :  number = 0;
  id:number;
  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=> this.id=re["id"]
    );}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public listItem : ListItemsService,
    public detail : ListItemsService,
    private stdservice : AuthService,
  ) { }

  ngOnInit() {
    this.showItem();
    this.checkLogin();
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
    alert("Đã thêm vào giỏ hàng!!!");
  }
  showItem(){
     this.listItem.getAllItems().subscribe((data) => {
       for(var i=0; i<data.length; i++){
        if(data[i].pet == false){
          this.list[this.count] = data[i];
          this.count ++;
        }
       }
       return this.list
     });
  }

}
