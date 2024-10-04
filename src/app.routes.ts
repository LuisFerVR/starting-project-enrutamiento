import { Component, inject } from "@angular/core";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";
import { routes as userRoutes } from "./app/users/user.routes";
import { CanMatchFn, RedirectCommand, Router, RunGuardsAndResolvers } from "@angular/router";

const dummyCanMatch:CanMatchFn =(route,segments)=>{
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess>0.5){
        return true;
    }

    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const routes = [
    {
        path:'',
        component:NoTaskComponent,
        Title:'No Task Slected'
    },
    {
        path:'users/:userId',
        component:UserTasksComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange' as RunGuardsAndResolvers,
        children:userRoutes,
        canMatch:[dummyCanMatch],
        data:{
            message:'Hello World'
        },
        resolve:{
            userName:resolveUserName
        },
        title:resolveTitle
    },
    {
        path:'**',
        component:NotFoundComponent
    }
]