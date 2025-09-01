import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataOnCustomer } from '../class/data';

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

 data: DataOnCustomer = new DataOnCustomer() //init a class

}
