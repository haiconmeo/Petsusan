import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../_services/list-items.service';
import { List } from '../_models/list-item.class';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css', ]
})
export class ItemsComponent implements OnInit{

  public list : List[] =[];

  constructor(
    public listItem : ListItemsService
  ) { }

  ngOnInit() {
    this.showItem();
    this.listItem.getAllItems()
  }

  
  showItem(){
     this.listItem.getAllItems().subscribe((data) => 
      this.list = data
    );
  }

}
