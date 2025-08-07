import { Admin } from './../../admin/admin';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Servicetest } from '../../servicetest';

@Component({
  selector: 'app-requests',
  imports: [CommonModule, Admin],
  templateUrl: './requests.html',
  styleUrl: './requests.css',
})
export class Requests {
  userList: any[] = [];
  constructor(private deptService: Servicetest) {}

  // constructor(private http: HttpClient) {}
  // getAllUsers() {
  //   this.http
  //     .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers')
  //     .subscribe((result: any) => {
  //       this.userList = result.data;
  //     });
  // }

  getAllUsers() {
    this.deptService.getAllData().subscribe((res: any) => {
      this.userList = res.data;
    });
  }
}
