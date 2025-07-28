import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    JsonPipe,
    PercentPipe,
    SlicePipe,
    DecimalPipe,
    AsyncPipe,
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  firstName: string = 'amitendu';
  middleName: string = 'Bikash';
  lastName: string = 'DHUSIYA';

  date2: Date = new Date();

  // Example Observable (emits value after 3 seconds)
  asyncData$: Observable<string> = of('Data loaded using Async Pipe').pipe(
    delay(3000)
  );

  // Example Promise
  asyncPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Data from Promise using Async Pipe'), 4000);
  });
}
