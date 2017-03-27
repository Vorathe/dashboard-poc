import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './shared';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ LoginGuard ] },
  { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
