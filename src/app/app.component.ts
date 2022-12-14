import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  cards = [
    { name: 'pies', number: 711 },
    { name: 'kot', number: 712 },
  ];
}
