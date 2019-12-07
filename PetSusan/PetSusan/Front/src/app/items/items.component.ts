import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../_services/list-items.service';
import { List } from '../_models/list-item.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['.././../css/style.css',  ]
})
export class ItemsComponent implements OnInit{

  public list : List[] =[];
  public count :  number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public listItem : ListItemsService
  ) { }

  ngOnInit() {
    this.showItem();
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
