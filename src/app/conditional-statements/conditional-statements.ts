import { Component, effect, isWritableSignal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterLink,Router } from "@angular/router";


@Component({
  selector: 'app-conditional-statements',
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, RouterLink],
  templateUrl: './conditional-statements.html',
  styleUrl: './conditional-statements.css',
})
export class ConditionalStatements {

  constructor(public route:Router){
    effect(() => console.log(this.name()))    
  }
  
  isLoggedIn:WritableSignal<boolean> = signal(false);
  showError = signal(false);
  status = signal('notStarted');
  age = 18
  name = signal('');
  gender = signal('');
  address = signal(''); 

  login(username: string, password: string){
    if(username === 'admin' && password === 'admin@123'){
      this.isLoggedIn.set(true);
      alert("Login successful");
    }else{
      this.isLoggedIn.set(false);     
      this.showError.set(true); 
      alert("fail");
    }
    
  }
  ChangeEvent(event: Event){
    const target = event.target as HTMLSelectElement;
    this.status.set(target.value);
    console.log("Event", event);
  }
  ageCount(){
    this.age++;
  }  
  sendParameter(){
    this.route.navigate(['pipes'],{ queryParams:{name:'Pranita', gender:'Female', address:'Pune'} })
  }
}
