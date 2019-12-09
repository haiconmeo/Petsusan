import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListItemsService } from '../../_services/list-items.service';
import { List } from '../../_models/list-item.class';
import { GioiHang } from 'src/app/_entities/gioihang';
import { AuthService } from 'src/app/_services/auth/auth.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['.././../../css/style.css','./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public list : List[] =[];
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

  
  

  showDetail(){
    const layid = this.route.snapshot.paramMap.get('id');
    this.detail.getDetails(layid).subscribe((detail) =>{
      this.list =detail
    })
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
  ngOnInit() {
    this.showDetail();
    console.log(this.showDetail())
  }
  
}

