import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})

export class Employees {

  constructor(private router: Router) {

  }
  goToAdmin() {
    this.router.navigateByUrl("admin")
  }
}
