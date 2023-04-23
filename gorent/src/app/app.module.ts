import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule} from '@angular/common/http';
import { PostingComponent } from './posting/posting.component';
import { AnnonceLouerComponent } from './annonce-louer/annonce-louer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   VehiculesComponent,
    SeConnecterComponent,
    NavbarComponent,
    InscriptionComponent,
    PostingComponent,
    AnnonceLouerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule ,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
