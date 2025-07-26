import { Component } from '@angular/core';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-for',
  imports: [
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './for.html',
  styleUrl: './for.css',
})
export class For {
  cities: string[] = ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata'];

  displayedColumns: string[] = ['sr', 'name', 'city', 'status'];
  data = [
    { sr: 1, name: 'Amit', city: 'Kolkata', status: 'Active' },
    { sr: 2, name: 'Riya', city: 'Delhi', status: 'Inactive' },
    { sr: 3, name: 'Vikram', city: 'Mumbai', status: 'Active' },
    { sr: 4, name: 'Sonal', city: 'Chennai', status: 'Active' },
    { sr: 5, name: 'Arjun', city: 'Bengaluru', status: 'Inactive' },
    { sr: 6, name: 'Priya', city: 'Hyderabad', status: 'Active' },
    { sr: 7, name: 'Rahul', city: 'Ahmedabad', status: 'Active' },
    { sr: 8, name: 'Neha', city: 'Pune', status: 'Inactive' },
    { sr: 9, name: 'Suresh', city: 'Jaipur', status: 'Active' },
    { sr: 10, name: 'Kavita', city: 'Lucknow', status: 'Inactive' },
  ];
}
