import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
})
export class Counter1Component {
  @Output() addToAppCounter = new EventEmitter<number>();

  sendDataToApp($event: number) {
    this.addToAppCounter.emit($event);
  }
}
