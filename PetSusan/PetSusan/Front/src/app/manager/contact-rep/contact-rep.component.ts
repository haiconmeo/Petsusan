import { Component, OnInit } from '@angular/core';
import { RepContact } from 'src/app/_entities/Repcontact';
import { ContactService } from 'src/app/_service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-rep',
  templateUrl: './contact-rep.component.html',
  styleUrls: ['./contact-rep.component.css']
})
export class ContactRepComponent implements OnInit {
Rep :RepContact={
    Name :'',
    Email:'',
    Message:''
}
  constructor(
    private contactservice:ContactService,
    private router :Router
  ) { }

  ngOnInit() {
  }
  send(){
    this.contactservice.send(this.Rep).subscribe(
      result=> {
        this.router.navigate(['/manager/contact']);
      }
    )
  }
}
