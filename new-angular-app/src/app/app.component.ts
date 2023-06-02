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
  //button component only
  updateAppCounter($event: number) {
    this.counter = $event;
  }

  //counter component only
  receiveDataFromCounter($event: number) {
    this.counter = this.counter + 1;
  }

  //on initialization
  setInitialCounter(initialCount: number) {
    this.counter = this.counter + initialCount;
  }
}
