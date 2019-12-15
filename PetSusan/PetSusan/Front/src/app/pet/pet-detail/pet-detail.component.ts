import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../_services/list-items.service';
import { List } from '../../_models/list-item.class';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GioiHang } from 'src/app/_entities/gioihang';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['.././../../css/style.css', '.././../../css/bootstrap.min.css',]
})
export class PetDetailComponent implements OnInit {

  public list : List[] =[];

  id:number;
  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=>{
        this.id=re["id"]
        console.log(this.id);
      } 
    );}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public detail : ListItemsService,
    private stdservice : AuthService,
  ) { }

  
  

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
    console.log(buy)
    alert("Đã thêm vào giỏ hàng!!!");
  }


  ngOnInit() {
    this.showDetail();
    this.checkLogin();
  }
}
