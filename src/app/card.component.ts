import { Component, Input, Output, EventEmitter } from '@angular/core';
import { clickData } from './interfaces';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent {
  @Input() card: string;
  @Input() number: number;
  @Output() sendClickData: EventEmitter<clickData>;
}
