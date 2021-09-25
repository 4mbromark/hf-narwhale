import { BaseDialogToolbarComponent } from './nw-base/base-dialog-toolbar/base-dialog-toolbar.component';
import { BaseDialogComponent } from './nw-base/base-dialog/base-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './nw-frame/topbar/topbar.component';
import { NavbarComponent } from './nw-frame/navbar/navbar.component';
import { ToolbarComponent } from './nw-frame/toolbar/toolbar.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './nw-auth/authentication-interceptor.service';
import { LoginComponent } from './nw-login/login.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { BaseComponent } from './nw-base/base/base.component';

import { UserMenuComponent } from './nw-frame/topbar/user-menu/user-menu.component';
import { CommissionHeaderComponent } from './nw-module/nw-list/commission-header/commission-header.component';
import { HeaderActionsComponent } from './nw-module/nw-list/commission-header/header-actions/header-actions.component';
import { HeaderCustomerComponent } from './nw-module/nw-list/commission-header/header-customer/header-customer.component';
import { HeaderDescriptionComponent } from './nw-module/nw-list/commission-header/header-description/header-description.component';
import { HeaderMonitorComponent } from './nw-module/nw-list/commission-header/header-monitor/header-monitor.component';
import { HeaderStatusComponent } from './nw-module/nw-list/commission-header/header-status/header-status.component';
import { ListComponent } from './nw-module/nw-list/list.component';
import { CommissionBodyComponent } from './nw-module/nw-list/commission-body/commission-body.component';
import { BodyOrderComponent } from './nw-module/nw-list/commission-body/body-order/body-order.component';
import { CreateCommissionComponent } from './nw-frame/toolbar/new-commission/create-commission.component';
import { TypeSelectorComponent } from './nw-frame/toolbar/new-commission/type-selector/type-selector.component';
import { CommissionEditorComponent } from './nw-frame/toolbar/new-commission/commission-editor/commission-editor.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { InsertWithStatusComponent } from './nw-frame/toolbar/new-commission/insert-with-status/insert-with-status.component';
import { BodyActionsComponent } from './nw-module/nw-list/commission-body/body-actions/body-actions.component';
import { DatePipe } from '@angular/common';
import { BodyCustomerComponent } from './nw-module/nw-list/commission-body/body-customer/body-customer.component';
import { ToolbarListComponent } from './nw-frame/toolbar/toolbar-list/toolbar-list.component';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    ToolbarComponent,
    ListComponent,
    CommissionHeaderComponent,
    HeaderStatusComponent,
    HeaderCustomerComponent,
    HeaderActionsComponent,
    HeaderMonitorComponent,
    HeaderDescriptionComponent,
    LoginComponent,
    BaseComponent,
    BaseDialogComponent,
    BaseDialogToolbarComponent,
    UserMenuComponent,
    CommissionBodyComponent,
    BodyOrderComponent,
    CreateCommissionComponent,
    TypeSelectorComponent,
    CommissionEditorComponent,
    InsertWithStatusComponent,
    BodyActionsComponent,
    BodyCustomerComponent,
    ToolbarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,

    FontAwesomeModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    // { provide: LOCALE_ID, useValue: navigator.language }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    library: FaIconLibrary,
    translate: TranslateService
  ) {
    library.addIconPacks(fas);
    translate.setDefaultLang('it');
  }
}
