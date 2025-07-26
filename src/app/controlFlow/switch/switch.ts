import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  imports: [FormsModule],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  inputVal: string = '';
}
