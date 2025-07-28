import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  user = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', this.user);
      alert('Form Submitted Successfully!');
      form.reset();
    }
  }
}
