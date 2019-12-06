import { Component, OnInit } from '@angular/core';
import { List } from '../_models/list-item.class';
import { ManageItemsService } from '../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css', '../../css/bootstrap.min.css','.././../css/style.css',]
})
export class ManagerComponent implements OnInit {
  
  public items : List[] = [];

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
         console.log(this.items)
      //  }
      // }
    });
 }

}
