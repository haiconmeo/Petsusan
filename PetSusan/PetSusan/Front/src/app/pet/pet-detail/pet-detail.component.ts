import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../_services/list-items.service';
import { List } from '../../_models/list-item.class';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['.././../../css/style.css', '.././../../css/bootstrap.min.css',]
})
export class PetDetailComponent implements OnInit {

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
  }
}
