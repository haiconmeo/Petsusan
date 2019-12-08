import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from '../../_models/list-category.class';
import { ListCategoryService } from '../../_services/list-category.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pet.component.html',
  styleUrls: ['../manager.component.css', '../../../css/style.css']
})
export class PetsComponent implements OnInit {

  public cates : Category[]=[];
  public items : List[] = [];
  public count : number =0;
  public item : List = null;
  public them : boolean = false;
  public dm : number ;

  public id: number;
  public image: string;
  public name: string;
  public price: number;
  public age: number;
  public weight: number;
  public color: string;
  public amounts: number;
  public pet: boolean = true ;
  public sex: boolean ;
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
    public listCate : ListCategoryService,
  ) { }

  ngOnInit() {
    this.showItem();
    this.showCategory();
  }

  showCategory(){
    this.listCate.getCategorys().subscribe((data=>{
      this.cates = data;
    }))
  }

  gigido(e){
    this.sex = e.target.value;
  }
  editItem(e){
    this.item.cat_loai = e.target.value;
  }
  addItem(e){
    this.cat_loai = e.target.value;
  }

  showItem(){    
    this.listItem.getAllItems().subscribe((data) => {
      for(var i=0; i<data.length; i++){
       if(data[i].pet == true ){
         this.items[this.count] = data[i];
         this.count ++;
       }
      }
      return this.items
    });
 }

  add(){
    let listadd : List = {
      id : this.id,
      image: this.imageSrc,
      age: this.age,
      name: this.name,
      price: this.price,
      weight: this.weight,
      color: this.color,
      amounts: this.amounts,
      pet: this.pet,
      sex: this.sex,
      description: this.description,
      rate_tb: this.rate_tb,
      cat_giong: this.cat_giong,
      cat_loai: this.cat_loai
    };
    
    this.listItem.getAdd(listadd).subscribe(data =>{
      // this.items.push(data);
      alert("Add thành công")
    });
  }

  update(){
    let list : List = {
      id : this.item.id,
      image: this.imageSrc,
      age: this.item.age,
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

    this.listItem.getUpdate(list).subscribe( data=>{
      alert("Edit thành công")
    }
     
    );
    
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
