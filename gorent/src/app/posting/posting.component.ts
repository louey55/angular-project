import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent {
     annonce = {
      marque: '',
      modele: '',
      matricule: '',
      moteur: '',
      puissance: '',
      prix: '',
      zone: '',
      image:''
    };
    constructor(public shared:SharedService) { }

    creerAnnonce()
    {
      this.shared.addproduit(this.annonce).subscribe(
        response => {
          console.log(response);
        },
        error => {//erreur
          console.log(error);
        }
      );
      this.annonce.marque= '',
      this.annonce.modele= '',
      this.annonce.matricule= '',
      this.annonce.moteur= '',
      this.annonce.puissance= '',
      this.annonce.prix= '',
      this.annonce.zone= '',
      this.annonce.image = ''

    }
  }