import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-annonce-louer',
  templateUrl: './annonce-louer.component.html',
  styleUrls: ['./annonce-louer.component.css']
})
export class AnnonceLouerComponent {
  louer = {
    date_debut: '',
    date_fin: '',
  
  };
  constructor(public shared:SharedService) { }

  creerAnnonceL()
  {
    this.shared.addAnnonceLocation(this.louer).subscribe(
      response => {
        console.log(response);
      },
      error => {//erreur
        console.log(error);
      }
    );
    this.louer.date_debut= '',
    this.louer.date_fin= ''
    

    }
 



}
