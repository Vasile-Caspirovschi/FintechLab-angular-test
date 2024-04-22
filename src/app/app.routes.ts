import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../../_layouts/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path:  '', component: LoginComponent},
    {path: 'dashboard', component: DashboardLayoutComponent},
];
