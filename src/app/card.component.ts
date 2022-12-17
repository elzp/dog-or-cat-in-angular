import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent {
  @Input() card: string;
  @Input() number: number;
  @Output() sendClickData: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.sendClickData.emit(this.card);
  }
}
