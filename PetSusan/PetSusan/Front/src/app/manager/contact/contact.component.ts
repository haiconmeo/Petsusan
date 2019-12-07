import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_entities/contact';
import { ContactService } from 'src/app/_service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['../manager.component.css', '../../../css/style.css']
})
export class ContactsComponent implements OnInit {
  contacs: Contact[]=[];
  seleccontacs: Contact;
  constructor(
    private contactservice:ContactService,
  ) { }

  ngOnInit() {
    this.contactservice.getAllContact().subscribe(a =>this.contacs=a);
  }
  // Deletecontact(){
  //   this.contactservice.delete()
  // }

}
