import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-req',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './http-req.html',
  styleUrls: ['./http-req.css']
})
export class HttpReq {
  apiUrlGet = 'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment';
  apiUrlPost = 'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment';

  departments: any[] = [];
  newDepartment = { DepartmentName: '' };

  constructor(private http: HttpClient) {
    this.getDepartments();
  }

  getDepartments() {
    this.http.get<any[]>(this.apiUrlGet).subscribe((res) => {
      this.departments = res;
    });
  }

  createDepartment() {
    this.http.post(this.apiUrlPost, this.newDepartment).subscribe(() => {
      this.getDepartments(); // Refresh list after adding
      this.newDepartment = { DepartmentName: '' }; // Reset input
    });
  }

// Example placeholder functions if PUT/DELETE become available later
  updateDepartment(id: number) {
    const updatedDept = { DepartmentId: id, DepartmentName: 'Updated Name' };
    // Replace with actual PUT API when available
    this.http.put(`API_URL_HERE/${id}`, updatedDept).subscribe(() => this.getDepartments());
  }

  deleteDepartment(id: number) {
    // Replace with actual DELETE API when available
    this.http.delete(`API_URL_HERE/${id}`).subscribe(() => this.getDepartments());
  }

}
