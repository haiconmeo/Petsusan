import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-pets',
  templateUrl: './pet.component.html',
  styleUrls: ['../manager.component.css', '../../../css/style.css']
})
export class PetsComponent implements OnInit {

  public items : List[] = [];
  public count : number =0;
  public item : List = null;
  public them : boolean = false;

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
      for(var i=0; i<data.length; i++){
       if(data[i].pet == true){
         this.items[this.count] = data[i];
         this.count ++;
       }
      }
      return this.items
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
    this.them = false;
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

  check(){
    this.them = true;
    this.item = null;
  }


}
