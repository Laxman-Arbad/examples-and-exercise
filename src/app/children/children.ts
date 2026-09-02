import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parent } from '../parent/parent';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.html',
  styleUrl: './children.css',
})
export class Children {
  constructor(public counte: Counter) {}

  @Input() userName: string|undefined;
  @Output() selectedUser = new EventEmitter();
  @Output() deletedUser = new EventEmitter();

  whichUser(user:string|undefined){    
    this.selectedUser.emit(user);
  }
  deleteUser(user:string|undefined){
    this.deletedUser.emit(user);
  }

}
