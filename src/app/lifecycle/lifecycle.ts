import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.html',
  imports: [CommonModule],
  styleUrls: ['./lifecycle.css'],
})
export class Lifecycle
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string = '';

  constructor() {
    console.log('1. Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy called');
  }

  show = true;
  inputValue = 'Initial Value';

  toggleComponent() {
    this.show = !this.show;
  }

  changeData() {
    this.inputValue = 'Updated Value ' + new Date().toLocaleTimeString();
  }
}
