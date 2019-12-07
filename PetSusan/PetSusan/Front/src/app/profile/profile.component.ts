import { Component, OnInit } from '@angular/core';
import {Profile} from './../_entities/profile';
import { AuthService } from '../_services/auth/auth.service';
import { User } from '../_entities/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class ProfileComponent implements OnInit {
  profile : Profile
  public id: number;
  checkLogin(){
    this.stdservice.loadUser().subscribe(
      re=>{this.id=re["id"],

      this.stdservice.loadprofile_user(this.id).subscribe(a =>this.profile=a) }
    );
    
    
 }

 activeColor: string = 'green';
 borderColor: string = '';
 baseColor: string = '#ccc';
 overlayColor: string = 'rgba(255,255,255,0.5)';

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

  ngOnInit() {
    
     this.checkLogin()
     
  }
  add(){
    console.log("profile:")
  }
}
