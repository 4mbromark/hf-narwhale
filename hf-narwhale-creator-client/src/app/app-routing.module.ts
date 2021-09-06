import { LoginGuardService } from './nw-auth/guard/login-guard.service';
import { LoginComponent } from './nw-login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingUrl } from './nw-object/url/url';
import { AuthenticationGuardService } from './nw-auth/guard/auth-guard.service';
import { ListComponent } from './nw-module/nw-list/list.component';


const routes: Routes = [
  { path: RoutingUrl.LOGIN_PAGE, component: LoginComponent, canActivate: [LoginGuardService] },

  { path: RoutingUrl.COMMISSION_LIST_PAGE, component: ListComponent, canActivate: [AuthenticationGuardService] },

  { path: '', redirectTo: RoutingUrl.LOGIN_PAGE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
