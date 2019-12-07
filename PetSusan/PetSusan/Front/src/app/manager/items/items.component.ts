import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', '../manager.component.css', '../../../css/style.css']
})
export class ItemComponent implements OnInit {

  public items : List[] = [];
  public count : number =0;
  public item : List = null;
  public them : boolean = false;


  public image: string;
  public name: string;
  public price: number;
  public weight: number;
  public color: string;
  public amounts: number;
  public pet: boolean ;
  public sex: boolean;
  public description : string;
  public rate_tb: number;
  public cat_giong : string;
  public cat_loai : string;

  activeColor: string = 'green';
  borderColor: string = '';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  iconColor: string ='';

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
    
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;

    console.log("Base64_@@:",this.imageSrc)
  }

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
       if(data[i].pet == false){
         this.items[this.count] = data[i];
         this.count ++;
       }
      }
      return this.items
    });
 }

  add(){
    let list = new List(this.image, this.name, this.price, this.weight, this.color, this.amounts, this.pet, this.sex, this.description, this.rate_tb, this.cat_giong, this.cat_loai);
    this.listItem.getAdd(list).subscribe(data =>{
      console.log(data)
    });
  }

  update(){
   // let list = new List(this.image, this.name, this.price, this.weight, this.color, this.amounts, this.pet, this.sex, this.description, this.rate_tb, this.cat_giong, this.cat_loai);
    this.listItem.getUpdate(this.item).subscribe(data =>{
      // this.item.image=imageSrc;
      console.log(this.item)
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
