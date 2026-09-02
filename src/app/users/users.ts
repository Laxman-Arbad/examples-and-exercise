import { Component, signal,Pipe } from '@angular/core';
import { Employeeservice } from '../services/employeeservice';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  constructor(public empservice: Employeeservice){}

  empData:any = signal("");

  ngOnInit(){
    this.empData.set(this.empservice.userDetails());    
  }
}
