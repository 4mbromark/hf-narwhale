import { CustomersComponent } from './nw-module/customers/customers.component';
import { TemplatesComponent } from './nw-module/templates/templates.component';
import { CommissionArchiveComponent } from './nw-module/commission-archive/commission-archive.component';
import { DashboardComponent } from './nw-module/dashboard/dashboard.component';
import { LoginGuardService as LoginGuard } from './nw-auth/guard/login-guard.service';
import { LoginComponent } from './nw-login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingUrl } from './nw-object/url/url';
import { AuthenticationGuardService as AuthGuard } from './nw-auth/guard/auth-guard.service';
import { CommissionListComponent } from './nw-module/commission-list/commission-list.component';


const routes: Routes = [
  { path: RoutingUrl.LOGIN_PAGE, component: LoginComponent, canActivate: [LoginGuard] },

  { path: RoutingUrl.DASHBOARD, component: DashboardComponent, canActivate: [AuthGuard] },
  { path: RoutingUrl.COMMISSION_LIST, component: CommissionListComponent, canActivate: [AuthGuard] },
  { path: RoutingUrl.COMMISSION_ARCHIVE, component: CommissionArchiveComponent, canActivate: [AuthGuard] },
  { path: RoutingUrl.TEMPLATES, component: TemplatesComponent, canActivate: [AuthGuard] },
  { path: RoutingUrl.CUSTOMERS, component: CustomersComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: RoutingUrl.LOGIN_PAGE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
