import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  imports:[RouterOutlet],
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  //userId= input.required<string>();
  private userService= inject(UsersService);
  userName='';
  private activedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription =this.activedRoute.paramMap.subscribe({
      next:(paramMap)=>this.userName=this.userService.users.find((user)=>user.id===paramMap.get('userId'))?.name||''
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe());
  }
  
  /* userName=computed(()=>{
    this.userService.users.find(user=>user.id===this.userId())?.name;
  }) */
 
}
