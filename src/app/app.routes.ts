import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing-page/landing-page-routing.module').then(m => m.LandingPageRoutingModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule)
    }
];
