import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  firstName: string = 'amitendu';
  middleName: string = 'Bikash';
  lastName: string = 'DHUSIYA';
}
