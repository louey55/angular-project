import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent {
  vehicules: any;

  constructor(private http:HttpClient) {
    this.http.get('http://localhost/php/vehicule.php').subscribe(data=>this.vehicules=data)





  }

  ngOnInit() {}
}