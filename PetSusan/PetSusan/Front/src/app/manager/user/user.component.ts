import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_entities/profile';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../manager.component.css', '../../../css/style.css']
})
export class UserComponent implements OnInit {
  profiles: Profile[]=[];
  constructor(
    private authtservice:AuthService,
  ) { }

  ngOnInit() {
    this.authtservice.loadprofile().subscribe(a =>this.profiles=a);
  }

}
