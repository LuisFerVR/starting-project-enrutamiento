import { Routes } from "@angular/router";
import { TaskComponent } from "../tasks/task/task.component";
import { canLeavEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks } from "../tasks/tasks.component";

export const routes : Routes = [
    {
        path:'',
        redirectTo:'tasks',
        pathMatch:'full'
    },
    {
        path:'tasks',
        component:TaskComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            userTasks: resolveUserTasks,
          },
    },
    {
        path:'tasks/new',
        component:NewTaskComponent,
        canDeactivate:[canLeavEditPage]
    }
]