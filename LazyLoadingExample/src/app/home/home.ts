import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
    constructor(private router: Router) {}
  goToAdmin() {
    this.router.navigate(['/admin']); // absolute path
  }
}
