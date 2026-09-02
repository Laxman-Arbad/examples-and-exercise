import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Signals } from "./signals/signals";
import { MatTabsModule } from '@angular/material/tabs';
import { Counter } from './counter/counter';
import { ConditionalStatements } from './conditional-statements/conditional-statements';
import { Todolist } from './todolist/todolist';
import { Children } from './children/children';
import { Parent } from "./parent/parent";
import { Pipes } from './Pipes/pipes/pipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Signals, CommonModule,
    MatTabsModule, Counter, ConditionalStatements, Todolist,
    Parent, Pipes, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples-and-exercise');
}
