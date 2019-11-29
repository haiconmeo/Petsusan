import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css', ]
})
export class HomeComponent implements OnInit {

  constructor( private loginservice:AuthService) { }

  ngOnInit() {
    this.loginservice.loadUser().subscribe(
      a=>console.log("mah:",a)
    )
    
  }

}
