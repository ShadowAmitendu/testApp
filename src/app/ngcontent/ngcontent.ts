import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  imports: [CommonModule],
  templateUrl: './ngcontent.html',
  styleUrl: './ngcontent.css',
})
export class Ngcontent {
  users: any[] = [];
  isLoading = false;
  hasLoaded = false;

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.isLoading = true;
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.isLoading = false;
          this.hasLoaded = true;
        },
        error: () => {
          this.isLoading = false;
          this.hasLoaded = true;
          alert('Failed to load users.');
        },
      });
  }
}
