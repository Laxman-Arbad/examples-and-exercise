import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  employee: WritableSignal<Employee[]> = signal([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: false,
    },
  ]);
  empname = signal('');
  deleteEmployee(id: number) {
    this.employee.update(() => this.employee().filter((emp) => emp.id !== id));
  }
  addEmployee() {
    if (this.empname()) {
      this.employee.update((prevEmployees) => [
        ...prevEmployees,
        {
          id: prevEmployees.length + 1,
          name: this.empname(),
          position: 'HR',
          department: true,
        },
      ]);
      this.empname.set('');
    }
  }
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: boolean;
}
