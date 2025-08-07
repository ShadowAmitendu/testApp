import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicetest {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(
      'https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers'
    );
  }
}
