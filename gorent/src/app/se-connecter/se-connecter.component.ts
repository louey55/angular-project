import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent {
  email: string ='';
  password: string ='';
  isLoggedIn: boolean=false;
  errorMessage: string='';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.http.post('http://localhost/php/seConnecter.php', credentials)
      .subscribe((response: any) => {
        if (response.success) {
          // Set session token
          localStorage.setItem('token', response.token);
          // Navigate to dashboard
          this.router.navigate(['/']);
        } else {
          this.errorMessage = response.message;
        }
      }, error => {
        this.errorMessage = 'Une erreur s\'est produite, veuillez réessayer plus tard.';
      });
  }

  onLogout() {
    // Clear session token
    localStorage.removeItem('token');
    // Navigate to login page
    this.router.navigate(['/se-connecter']);
  }
}

