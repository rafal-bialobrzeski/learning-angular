import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'new-angular-app';

  counter = 0;
  updateAppCounter($event: number) {
    this.counter = $event;
  }

  receiveDataFromCounter($event: number) {
    this.counter = $event;
  }
}
