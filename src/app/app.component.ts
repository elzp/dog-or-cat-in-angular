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
  changeNumer(data: string) {
    console.log(data);
    const numbers: Array<number> = this.cards.map((it) => it.number);
    console.log(data, numbers);
    const newnumber: number =
      numbers[0] > numbers[1] ? numbers[0] + 1 : numbers[1] + 1;
    this.cards.forEach((it) => {
      if (it.name === data) {
        it.number = newnumber;
      }
    });
  }
}
