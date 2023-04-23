import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  hero = {
    Nom : '',
    Prenom : '',
    Email :'',
    Mot_De_Passe :'',
    Date_De_Naissance :'',
    Ooption : '' , 
  }

  constructor(public shared:SharedService) {}

  ajout() {
    console.log(this.hero);
    if (this.hero.Nom && this.hero.Prenom && this.hero.Email && this.hero.Mot_De_Passe && this.hero.Date_De_Naissance && this.hero.Ooption) {
      this.shared.addUser(this.hero).subscribe(
        response => {
          console.log(response);
        },
        error => {//erreur
          console.log(error);
        }
      );
      
      this.hero.Nom = '';
      this.hero.Prenom = '';
      this.hero.Email = '';
      this.hero.Mot_De_Passe = '';
      this.hero.Date_De_Naissance = '';
      this.hero.Ooption = '';
    } else {
      console.log('Veuillez remplir tous les champs obligatoires');
    }
  }
}
