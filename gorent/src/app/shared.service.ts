import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost/php/seConnecter.php'; 
  constructor(private http: HttpClient) {}
  addUser(user: any) {
    return this.http.post('http://localhost/php/database.php', JSON.stringify(user));
  }
  addproduit(user: any) {
    return this.http.post('http://localhost/php/produit.php', JSON.stringify(user));
  }
  addAnnonceLocation(user: any) {
    return this.http.post('http://localhost/php/AnnonceLocation.php', JSON.stringify(user));
  }

  
}


