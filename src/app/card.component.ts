import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent {
  @Input() card: string;
}
