import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signals } from "./signals/signals";
import { MatTabsModule } from '@angular/material/tabs';
import { count } from 'console';
import { Counter } from './counter/counter';
import { ConditionalStatements } from './conditional-statements/conditional-statements';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  imports: [Signals,
    MatTabsModule,Counter, ConditionalStatements,Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples-and-exercise');
}
