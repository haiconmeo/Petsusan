import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PetComponent } from './pet/pet.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemsComponent } from './items/items.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PetComponent,
    AboutComponent,
    ContactComponent,
    ItemsComponent,
    PetListComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
