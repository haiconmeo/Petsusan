import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemsComponent } from './items/items.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ManagerComponent } from './manager/manager.component';

import { ItemComponent } from './manager/items/items.component';
import { PetsComponent } from './manager/pet/pet.component';
import { ContactsComponent } from './manager/contact/contact.component';
import { RevenueComponent } from './manager/revenue/revenue.component';
import { UserComponent } from './manager/user/user.component';
import { RepContact } from './_entities/Repcontact';
import { ContactRepComponent } from './manager/contact-rep/contact-rep.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'pet/:name', component: PetListComponent},
  {path: 'pet/:name/:id', component: PetDetailComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/payment', component: PaymentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'manager', component: ManagerComponent},

  {path: 'manager/item', component: ItemComponent},
  {path: 'manager/pet', component: PetsComponent},
  {path: 'manager/contact', component: ContactsComponent},
  // {path: 'manager/contact/rep', component: ContactRepComponent},
  {path: 'manager/doanh-thu', component: RevenueComponent},
  {path: 'manager/user', component: UserComponent},



  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
