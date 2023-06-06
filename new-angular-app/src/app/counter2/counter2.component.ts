import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css'],
})
export class Counter2Component {
  @Output() addToAppCounter = new EventEmitter<number>();
  @Output() updateInitialCounter = new EventEmitter<number>();

  sendDataToApp($event: number) {
    this.addToAppCounter.emit($event);
  }

  sendInitialCounter($event: number) {
    this.updateInitialCounter.emit($event);
  }
}
