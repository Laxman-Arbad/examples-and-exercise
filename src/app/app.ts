import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signals } from "./signals/signals";
import { MatTabsModule } from '@angular/material/tabs';
import { count } from 'console';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Signals,
    MatTabsModule,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples-and-exercise');
}
