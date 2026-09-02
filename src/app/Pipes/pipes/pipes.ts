import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { TrimtextPipe } from '../trimtext-pipe';
import { Counter } from '../../services/counter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, TrimtextPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  constructor(public count: Counter, public route: Router, public aroute: ActivatedRoute) {}
  sentence = signal('');

  empData = signal([
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: false },
    { id: 2, name: 'Jane Smith', position: 'HR Manager', department: true },
    { id: 3, name: 'Mike Johnson', position: 'Marketing Specialist', department: false },
    { id: 4, name: 'Emily Davis', position: 'Sales Executive', department: true },
  ]);

  strtrimtext = signal('This is a sample text with leading and trailing spaces.');

  gotoSignals(){
    this.route.navigate(['conditional']); 
  }
  paramData = signal<{ name: string; gender: string; address: string }>({
    name: '',
    gender: '',
    address: ''
  });

  ngOnInit(){
    this.aroute.queryParams.subscribe((param)=>{ 
        this.paramData.set({
        name: param['name'] || '',
        gender: param['gender'] || '',
        address: param['address'] || ''
        }
      )
    })
  }
}
