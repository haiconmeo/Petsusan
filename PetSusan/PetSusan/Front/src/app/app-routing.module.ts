import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemsComponent } from './items/items.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'pet/dogs', component: PetListComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
