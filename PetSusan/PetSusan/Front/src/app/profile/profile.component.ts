import { Component, OnInit } from '@angular/core';
import {Profile} from './../_entities/profile';
import { AuthService } from '../_services/auth/auth.service';
import { User } from '../_entities/user';
import {Profile2} from './../_entities/profile2';
import { Tinh } from '../_entities/Tinh';
import { Huyen } from '../_entities/huyen';
import { Xa } from '../_entities/xa';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css',]
})


export class ProfileComponent implements OnInit {
  profile : Profile
  tinh :Tinh[]=[];
  public id: number;
  huyen: Huyen[]=[];
  xa :Xa[]=[];
  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=>{this.id=re["id"],

      this.stdservice.loadprofile_user(this.id).subscribe(a =>this.profile=a) }
    );
    
    
 }
birth_day:Date;
 activeColor: string = 'green';
 borderColor: string = '';
 baseColor: string = '#ccc';
 overlayColor: string = 'rgba(255,255,255,0.5)';
 tinh_select:string="";
 huyen_select:string="";
 xa_select:string="";
 stress_select:string ="";
 dragging: boolean = false;
 loaded: boolean = false;
 imageLoaded: boolean = false;
 imageSrc: string = '';
 iconColor: string ='';
  constructor(
    private stdservice : AuthService,
  ) { 
   
  }
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
    this.profile.avatar=this.imageSrc;
    console.log("Base64_@@:",this.imageSrc)
}

  load_tinh(){
    this.stdservice.load_tinh().subscribe(
      a=>this.tinh=a
    );
  }
  load_huyen(id){
    this.stdservice.load_huyen(id).subscribe(
      b=>this.huyen=b
    );
  }

  load_xa(id){
    this.stdservice.load_xa(id).subscribe(
      b=>this.xa=b
    );
  }
  onChange(e){
    this.load_huyen(e);
    this.tinh_select=this.tinh.find(code=>code.code===e.target.value).name;
  }
  onChange3(e){   
    
    this.xa_select=this.xa.find(code=>code.code===e.target.value).name;
  }

  onChange2(e){
    this.load_xa(e);
    this.huyen_select=this.huyen.find(code=>code.code===e.target.value).name;
  }
  ngOnInit() {
    
     this.checkLogin();
     this.load_tinh();
     
  }
  add(){
    
    var profile2 : Profile2={
      id:this.id,
      avatar: this.imageSrc,
      phonenum: this.profile.phonenum,
      birth_date: this.birth_day,
      cmmd: this.profile.cmmd,
      user: this.id,
      stress: this.stress_select,
      xa :this.xa_select,
      huyen:this.huyen_select,
      tinh :this.tinh_select
    }
    console.log("profile:",profile2)
    console.log("profile:",this.id)
    this.stdservice.putProfile(profile2,this.id);
  
  }
}
