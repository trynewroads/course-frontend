import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/task.routes').then(m => m.routes)
    }
];
