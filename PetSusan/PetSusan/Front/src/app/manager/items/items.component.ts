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


  public image: string ='';
  // public name: string ='';
  // public price: number ;
  // public weight: number ;
  // public color: string ='';
  // public amounts: number;
  // public pet: boolean ;
  // public sex: boolean;
  // public description : string ='';
  // public rate_tb: number;
  // public cat_giong : string ='';
  // public cat_loai : string ='';

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
    this.image = reader.result;
    this.loaded = true;

    console.log("Base64_@@:",this.image)
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
      console.log(this.items)
      return this.items
      
    });
 }

  // add(){
  //   let list : List = {
  //     id : this.item.id,
  //     image: this.item.image,
  //     name: this.item.name,
  //     price: this.item.price,
  //     weight: this.item.weight,
  //     color: this.item.color,
  //     amounts: this.item.amounts,
  //     pet: this.item.pet,
  //     sex: this.item.sex,
  //     description: this.item.description,
  //     rate_tb: this.item.rate_tb,
  //     cat_giong: this.item.cat_giong,
  //     cat_loai: this.item.cat_loai,
  //   };
    
  //   this.listItem.getAdd(list).subscribe(data =>{
  //     console.log(data)
  //   });
  // }

  update(){
    let list : List = {
      id : this.item.id,
      image: this.item.image,
      name: this.item.name,
      price: this.item.price,
      weight: this.item.weight,
      color: this.item.color,
      amounts: this.item.amounts,
      pet: this.item.pet,
      sex: this.item.sex,
      description: this.item.description,
      rate_tb: this.item.rate_tb,
      cat_giong: this.item.cat_giong,
      cat_loai: this.item.cat_loai,
    };
  
    console.log(list)
    this.listItem.getUpdate(list).subscribe();
  }

  delete(id: number){
    this.listItem.getDelete(id).subscribe((data)=>{
      let index = this.updateDelete(id);
      this.items.splice(index, 1);
  });
  }

  edit(item: List){
    this.item = item;
    console.log(this.item)
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
