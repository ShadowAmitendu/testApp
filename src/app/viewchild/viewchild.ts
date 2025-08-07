import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css',
})
export class Viewchild implements AfterViewInit {
  @ViewChild('textBox') textbox?: ElementRef;

  ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value;
  }
}
