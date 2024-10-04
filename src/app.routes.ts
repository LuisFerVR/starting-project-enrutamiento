import { Component } from "@angular/core";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import { TaskComponent } from "./app/tasks/task/task.component";
import { NewTaskComponent } from "./app/tasks/new-task/new-task.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const routes = [
    {
        path:'',
        component:NoTaskComponent
    },
    {
        path:'users/:userId',
        component:UserTasksComponent,
        children:[
            {
                path:'tasks',
                component:TaskComponent
            },
            {
                path:'tasks/new',
                component:NewTaskComponent
            }
        ]
    },
    {
        path:'**',
        component:NotFoundComponent
    }
]