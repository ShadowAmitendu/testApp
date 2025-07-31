import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-reactive',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css'
})
export class Reactive {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pinCode: new FormControl(),
    isAccepted: new FormControl(),
  })
  formValues: any;
  send(){
    this.formValues = this.studentForm.value;
  }
}
