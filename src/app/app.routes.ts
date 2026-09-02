import { Routes } from '@angular/router';
import { Signals } from './signals/signals';
import { Todolist } from './todolist/todolist';
import { Counter } from './counter/counter';
import { Parent } from './parent/parent';
import { Children } from './children/children';
import { Pipes } from './Pipes/pipes/pipes';
import {ConditionalStatements} from './conditional-statements/conditional-statements'
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Users } from './users/users';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
    {path:"", component: Signals},
    {path:"todolist", component: Todolist},
    {path:"counter", component: Counter},
    {path:"parent", component: Parent},
    {path:"child", component: Children},
    {path:"pipes", component: Pipes},
    {path: "conditional", component: ConditionalStatements},
    // {path: "**", redirectTo: ''}, if we want to redirect to home then we can use this
    {path: "users", component: Users},
    {path: "user-details/:id", component: UserDetails},
    {path: "**", component: Pagenotfound},      

];
