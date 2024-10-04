import { Component } from "@angular/core";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";
import { routes as userRoutes } from "./app/users/user.routes";

export const routes = [
    {
        path:'',
        component:NoTaskComponent
    },
    {
        path:'users/:userId',
        component:UserTasksComponent,
        children:userRoutes,
        data:{
            message:'Hello World'
        },
        resolve:{
            userName:resolveUserName
        }
    },
    {
        path:'**',
        component:NotFoundComponent
    }
]