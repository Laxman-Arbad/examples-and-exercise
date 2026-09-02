import { Component, signal } from '@angular/core';
import { Employeeservice } from '../services/employeeservice';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  constructor(public detailsservice: Employeeservice, public router : ActivatedRoute
    ,public route: Router
  ){}
  getUser:any = signal("");
  ngOnInit(){    
    const data = this.detailsservice.userDetails();
    this.router.params.subscribe((param)=>{      
      const filterdata =  data.filter((u) => u.id == param['id'])      
      this.getUser.set(filterdata[0]);
    }); 
    
  }
  back(){
    this.route.navigate(['users']);
  }
}
