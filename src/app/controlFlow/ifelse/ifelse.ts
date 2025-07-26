import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  divOneVisible: boolean = true;
  toggleVisible: boolean = true;
  numA: string = '';
  numB: string = '';
  option: string = 'Select Status';

  show() {
    this.divOneVisible = true;
  }
  hide() {
    this.divOneVisible = false;
  }
  toggle() {
    this.toggleVisible = !this.toggleVisible;
  }
}
