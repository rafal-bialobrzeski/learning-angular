import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() initialCount!: number;
  @Output() updateCounterEvent = new EventEmitter<number>();
  @Output() updateInitialCounter = new EventEmitter<number>();
  label: string = 'button-label';
  counter: number = 0;

  ngOnInit() {
    this.counter = this.initialCount;
    this.updateInitialCounter.emit(this.initialCount);
    console.log(this.initialCount);
  }

  onSave() {
    this.counter = this.counter + 1;
    this.updateCounter(this.counter);
  }

  updateCounter(value: number) {
    this.updateCounterEvent.emit(value);
  }
}
