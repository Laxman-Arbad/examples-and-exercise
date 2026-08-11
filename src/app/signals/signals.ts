import { Component, signal, computed, effect, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  counter = signal(0);
  height = signal(100);
  width = signal(12);
  area = computed(() => this.height() * this.width());
  color = "black";
  speed = signal(1);
  fruit = signal("Apple");
  namevalue:WritableSignal<string> = signal('');

  users:WritableSignal<string[]> = signal(['Suresh', 'Ramesh', 'Mahesh', 'Ganesh']);

  constructor() {
    effect(() => {      
      if(this.speed() >= 0 && this.speed() <= 80)
        this.color = 'green';
      if(this.speed() > 80 && this.speed() <= 120)
        this.color = 'orange';
      if(this.speed() > 120)
        this.color = 'red';
      if(this.speed() > 150){
        alert("Speed is too high! Please, Check email for speed challan, Mumbai Police");
        this.speed.set(30);
      }
      console.log("Counter value", this.speed());
      console.log("Fruit value", this.fruit());
    })  
  }
  
  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }

  increaseHeight() {
    this.height.set(this.height()+2)
    //this.area = this.height * this.width;
  }
  reset(){
    this.height.update(() => 10)
   }
   speedEffect(){
      this.speed.set(this.speed() + 5);
   }
   changeFruit(){
      this.fruit.set("Banana");
      alert("Fruit changed to Banana");
   }
   updateUsers(){
    this.users.update((item) => [...item, 'Mohit']);
   }

   //change name of input type
   changeName(value:string){
    this.namevalue.set(value);
   }
   resetvalue(){
     this.namevalue.set('Laxman Arbad');
   }
}
