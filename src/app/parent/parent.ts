import { Component, signal, WritableSignal } from '@angular/core';
import { Children } from '../children/children';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-parent',
  imports: [Children],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent { 
  constructor(public counter: Counter) {}
  users = signal(['']);
  newUser = signal('');
  selectedUser = signal('');

  addUser(){
    this.users.update((data) =>([...data, this.newUser()]));
    this.newUser.set('');
  }

  getSelectedUser(user: string){
    this.selectedUser.set(user);
  }
  deleteUser(user: string){
    this.users.update((data) => data.filter((item) => item !== user));
  }
}
