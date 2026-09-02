import { Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Employeeservice {
    userDetails(){
        return [{
                id:1,
                name:'Peter',
                email:'peter@microsoft.com'
            },
            {
                id:2,
                name:'Meter',
                email:'Meter@google.com'
            },
            {
                id:3,
                name:'Mangesh',
                email:'Mangesh@gmail.com'                
            },
            {
                id:4,
                name:'Geet',
                email:'Geet@yahoo.com'                
            },{
                id:5,
                name:'Sumit',
                email:'sumit@utlook.com'                
            },
        ]
    }
}
