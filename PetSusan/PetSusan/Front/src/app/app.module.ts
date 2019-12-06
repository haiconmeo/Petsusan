import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';



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
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';



import { ItemQuickViewComponent } from './items/item-quick-view/item-quick-view.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';



import { ListItemsService } from './_services/list-items.service';
import { ListCartService } from './_services/list-cart.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './manager/user/user.component';
import { RevenueComponent } from './manager/revenue/revenue.component';
import { ItemComponent } from './manager/items/items.component';
import { PetsComponent } from './manager/pet/pet.component';
import { ContactsComponent } from './manager/contact/contact.component';
// import { ContactRepComponent } from './src/app/manager/contact-rep/contact-rep.component';
import { AvatarModule } from 'ngx-avatar';


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
    PetDetailComponent,
    LoginComponent,
    CartComponent,
    ItemQuickViewComponent,
    ItemDetailComponent,
    NotFoundComponent,
    CarouselComponent,
    ProfileComponent,
    PaymentComponent,
    ManagerComponent,
    UserComponent,
    RevenueComponent,
    ItemComponent,
    PetsComponent,
    ContactsComponent,
    // ContactRepComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,

    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    AvatarModule
  ],
  providers: [
    ListItemsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
