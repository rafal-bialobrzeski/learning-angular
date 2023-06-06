import { ChangeDetectionStrategy, Component, Output, ChangeDetectorRef } from '@angular/core';
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

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;


  constructor(private ref: ChangeDetectorRef){

  }
  //button component only
  updateAppCounter($event: number) {
    this.counter = $event;
  }

  //counter component only
  receiveDataFromCounter($event: number, counterID:string) {
    if (counterID == "counter1") {
      this.counter1 = $event
    } else if (counterID == "counter2") {
      this.counter2 = $event
    } else if (counterID == "counter3") {
      this.counter3 = $event
    }

console.log('c1=' + this.counter1 + ';c2=' + this.counter2 + ';c3=' + this.counter3 )

    this.counter = this.counter1+this.counter2+this.counter3
  }

  //on initialization
  setInitialCounter($event: number, counterID:string) {
    if (counterID == "counter1") {
      this.counter1 = $event
    } else if (counterID == "counter2") {
      this.counter2 = $event
    } else if (counterID == "counter3") {
      this.counter3 = $event
    }
    this.counter = this.counter + $event;
    this.ref.detectChanges()
  }
}
