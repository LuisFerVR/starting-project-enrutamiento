import { Component } from "@angular/core";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";

export const routes = [
    {
        path:'',
        component:NoTaskComponent
    },
    {
        path:'users/:userId',
        component:UserTasksComponent
    }
]