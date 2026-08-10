import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  counter = signal(0);
  
  increment() {
    this.counter.set(this.counter() + 1);
  }
}
