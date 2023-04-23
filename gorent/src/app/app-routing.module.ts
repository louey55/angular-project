import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { PostingComponent } from './posting/posting.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { AnnonceLouerComponent } from './annonce-louer/annonce-louer.component';

const routes: Routes = [
  {path:"se-connecter" ,component:SeConnecterComponent  },
  {path:"inscription" ,component:InscriptionComponent  },
  {path:"" ,component:HomeComponent  },
  {path:"posting" ,component:PostingComponent },
  {path:"vehicules",component:VehiculesComponent},
  {path:"annonce-louer" ,component:AnnonceLouerComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
