import { Component, OnInit } from '@angular/core';
import {Contact} from './../_entities/contact';
import {ContactService} from './../_service/contact.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class ContactComponent implements OnInit {
  contact :Contact={
    Subject:"",
    Name :"",
    Email:"",
    Message:"",
  }
  students :Contact[]=[]
  constructor(
    private contactservice:ContactService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  Submit_message(){
    // console.log(this.contact.Message)
    // this.contactservice.addContact(this.contact).subscribe( result=> {
    //   this.router.navigate(['/']);
    // }
    //   )

      this.contactservice.addContact().subscribe( result=> {
        this.router.navigate(['/']);
      }
        )
  }
}


