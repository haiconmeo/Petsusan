import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../_services/list-items.service';
import { List } from '../../_models/list-item.class';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['.././../../css/style.css', '.././../../css/bootstrap.min.css', ]
})
export class PetListComponent implements OnInit {

  public listPet : List[] = [] ;
  public check : number =0;
  constructor(
    private route: ActivatedRoute,
    public Petsv : ListItemsService
  ) { }

  ngOnInit() {
    this.showPet();
  }

  showPet(){
    const layname = this.route.snapshot.paramMap.get('name');
    console.log(layname)
    this.Petsv.getAllItems().subscribe(data=>{
      for(var i=0; i< data.length; i++){
        if(data[i].cat_loai == layname ){
          this.listPet[this.check] = data[i];
          this.check++;
        }
      }
      return this.listPet;
    })
  }

}
