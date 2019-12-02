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

  public message:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public detail : ListItemsService,
  ) { }

  
  

  public onSend(){
    this.detail.currentMessage.subscribe(message => this.message = message);
  }
  
  showDetail(){
    const layid = this.route.snapshot.paramMap.get('id');
    this.detail.getDetails(layid).subscribe((detail) =>{
      this.list =detail
    })
  }


  ngOnInit() {
    this.showDetail();
    this.onSend();
    console.log(this.showDetail())
  }
  
}

