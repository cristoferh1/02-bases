import { Component } from "@angular/core";
@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h2>Counter: {{counter}}</h2>
  <button (click)="increaseBy(true)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(false)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: boolean): void {
    value ? this.counter += 1 : this.counter -= 1;
  }
  reset() {
    this.counter = 10;
  }
}
