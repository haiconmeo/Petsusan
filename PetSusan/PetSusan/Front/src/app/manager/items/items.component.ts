import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', '../manager.component.css', '../../../css/style.css']
})
export class ItemComponent implements OnInit {

  public items : List[] = [];
  public item : List = null;

  public name: string;
  public price: number;
  public age: number;
  public weight: number;
  public color: string;
  public amounts: number;
  public sex: boolean;
  public description : string;
  public image: number;
  public cat_giong : number;
  public cat_loai : number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public listItem : ManageItemsService,
  ) { }

  ngOnInit() {
    this.showItem();
  }

  showItem(){
    this.listItem.getAllItems().subscribe((data) => {
      // for(var i=0; i<data.length; i++){
      //  if(data[i].pet == false){
         this.items = data
      //  }
      // }
    });
  }

  add(){
    let list = new List();
    this.listItem.getAdd(list).subscribe(data =>{
      console.log(data)
    });
  }

  delete(id: number){
    this.listItem.getDelete(id).subscribe((data)=>{
      let index = this.updateDelete(id);
      this.items.splice(index, 1);
  });
  }

  edit(item: List){
    this.item = item;
  }

  updateDelete(id: number) : number{
    let resul =0;
    this.items.forEach((cart, index) =>{
    if(cart.id == id){
      resul = index;
    }
  })
    return resul;
  }

}
