import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListItemsService } from '../../_services/list-items.service';
import { List } from '../../_models/list-item.class';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['.././../../css/style.css','./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public list : List[] =[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public detail : ListItemsService,
  ) { }

  
  

  showDetail(){
    const layid = this.route.snapshot.paramMap.get('id');
    this.detail.getDetails(layid).subscribe((detail) =>{
      this.list =detail
    })
  }


  ngOnInit() {
    this.showDetail();
    console.log(this.showDetail())
  }
  
}

