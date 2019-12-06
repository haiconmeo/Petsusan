import { Component, OnInit } from '@angular/core';
import { Cart } from './_models/list-cart.class';
import { ListCartService } from './_services/list-cart.service';
import { AvatarModule } from 'ngx-avatar';
import { AuthService } from './_services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../css/style.css', './../css/bootstrap.min.css', ]
})
export class AppComponent {
  public soluong : number =0;
  public carts : Cart[] =[];
  public username:string;
  public check1 : boolean = false;
  public check2 : boolean = false;
  public check3 : boolean = false;
  public check4 : boolean = false;
  public check6 : boolean = false;
  public avatar:string= 'http://localhost:8000/img/no-img.jpg';

  constructor(
    public cartService : ListCartService,
    private stdservice : AuthService,
    private router :Router
  ) { 
    this.checkLogin();
  }


  click1(){
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check6 = false;
  }
  click2(){
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
    this.check6 = false;
  }

  click3(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
    this.check6 = false;
  }

  click4(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
    this.check6 = false;
  }
  click6(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check6 = true;
  }
  click7(){
    this.username=null;
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }
  showCart(){
    this.cartService.getAllCart().subscribe((cart) =>{
      this.carts = cart;
      this.soluong = this.carts.length; 
      console.log(this.soluong)

    });
  }
  checkLogin(){
     this.stdservice.loadUser().subscribe(
       re=> this.username=re["username"]
     );
    //  console.log(this.username)
  }
  update(id: number) : number{
  let resul =0;
  this.carts.forEach((cart, index) =>{
    if(cart.id == id){
      resul = index;
    }
  })
   return resul;
  }

  ngOnInit() {
    this.showCart();
   
  }


  title = 'Front';
}
