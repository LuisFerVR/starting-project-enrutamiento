import { Component, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  imports:[RouterOutlet,RouterLink],
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent{
  userName=input.required<string>();
  message = input<string>();
  /* private routerActivated = inject(ActivatedRoute);

  ngOnInit() {
    this.routerActivated.data.subscribe({
      next:(data)=>console.log(data)
    })
  } */
 
}


export const resolveUserName: ResolveFn<string> = (
  activatedRoute : ActivatedRouteSnapshot,
  routerState:RouterStateSnapshot
)=>{
  const userService = inject(UsersService);
  const userName=userService.users.find((user)=>user.id===activatedRoute.paramMap.get('userId'))?.name||''
  return userName;
}


export const resolveTitle:ResolveFn<string> = (
  activatedRoute,
  routerState
)=>{
  return resolveUserName(activatedRoute,routerState) + "\'s Tasks";
}