import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label: string = 'button-label';
  @Input() initialCount!: number;
  counter: number = 0;
  onSave() {
    this.counter = this.initialCount + 1;
  }
}
