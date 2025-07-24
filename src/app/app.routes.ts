import { Routes } from '@angular/router';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { ContentLayout } from './core/layouts/content-layout/content-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthLayout,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'tasks',
        component: ContentLayout,
        loadChildren: () => import('./features/tasks/task.routes').then(m => m.routes)
    }
];
