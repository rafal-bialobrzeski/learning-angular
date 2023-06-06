import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css'],
})
export class Counter3Component {
  @Output() addToAppCounter = new EventEmitter<number>();
  @Output() updateInitialCounter = new EventEmitter<number>();

  sendDataToApp($event: number) {
    this.addToAppCounter.emit($event);
  }

  sendInitialCounter($event: number) {
    this.updateInitialCounter.emit($event);
  }
}
