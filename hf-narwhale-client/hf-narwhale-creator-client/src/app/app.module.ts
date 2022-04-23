import { ApiInterceptorService } from './nw-auth/api-interceptor.service';
import { ErrorInterceptorService } from './nw-auth/error-interceptor.service';
import { BaseDialogToolbarComponent } from './nw-common/base-component/base-dialog-toolbar/base-dialog-toolbar.component';
import { BaseDialogComponent } from './nw-common/base-component/base-dialog/base-dialog.component';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import {ClipboardModule} from '@angular/cdk/clipboard';

import { NgxEchartsModule } from 'ngx-echarts';

import {AngularSplitModule} from 'angular-split';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './nw-auth/authentication-interceptor.service';
import { LoginComponent } from './nw-login/login.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { BaseComponent } from './nw-common/base-component/base/base.component';

import { UserMenuComponent } from './nw-frame/topbar/user-menu/user-menu.component';
import { CommissionHeaderComponent } from './nw-module/commission-list/commission-header/commission-header.component';
import { HeaderActionsComponent } from './nw-module/commission-list/commission-header/header-actions/header-actions.component';
import { HeaderCustomerComponent } from './nw-module/commission-list/commission-header/header-customer/header-customer.component';
import { HeaderDescriptionComponent } from './nw-module/commission-list/commission-header/header-description/header-description.component';
import { HeaderMonitorComponent } from './nw-module/commission-list/commission-header/header-monitor/header-monitor.component';
import { HeaderStatusComponent } from './nw-module/commission-list/commission-header/header-status/header-status.component';
import { CommissionListComponent } from './nw-module/commission-list/commission-list.component';
import { CommissionBodyComponent } from './nw-module/commission-list/commission-body/commission-body.component';
import { BodyOrderComponent } from './nw-module/commission-list/commission-body/body-order/body-order.component';
import { CreateCommissionComponent } from './nw-frame/toolbar/new-commission/create-commission.component';
import { TypeSelectorComponent } from './nw-frame/toolbar/new-commission/type-selector/type-selector.component';
import { CommissionEditorComponent } from './nw-frame/toolbar/new-commission/commission-editor/commission-editor.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { InsertWithStatusComponent } from './nw-frame/toolbar/new-commission/insert-with-status/insert-with-status.component';
import { BodyActionComponent } from './nw-module/commission-list/commission-body/body-action/body-action.component';
import { DatePipe } from '@angular/common';
import { BodyCustomerComponent } from './nw-module/commission-list/commission-body/body-customer/body-customer.component';
import { ToolbarListComponent } from './nw-frame/toolbar/toolbar-list/toolbar-list.component';
import { BodyAnnotationComponent } from './nw-module/commission-list/commission-body/body-annotation/body-annotation.component';
import { BodyResourceComponent } from './nw-module/commission-list/commission-body/body-resource/body-resource.component';
import { BaseCommissionSectionComponent } from './nw-common/base-component/base-commission-section/base-commission-section.component';
import { BodyRecapComponent } from './nw-module/commission-list/commission-body/body-recap/body-recap.component';
import { BodyMessageComponent } from './nw-module/commission-list/commission-body/body-message/body-message.component';
import { StandardCommissionStatusChipComponent } from './nw-common/standard-component/standard-commission-status-chip/standard-commission-status-chip.component';
import { StandardSpinnerComponent } from './nw-common/standard-component/standard-spinner/standard-spinner.component';
import { MatNativeDateModule } from '@angular/material/core';
import { StandardEmptyComponent } from './nw-common/standard-component/standard-empty/standard-empty.component';
import { HeaderTypeComponent } from './nw-module/commission-list/commission-header/header-type/header-type.component';
import { StandardCommissionTypeChipComponent } from './nw-common/standard-component/standard-commission-type-chip/standard-commission-type-chip.component';
import { HeaderTimeComponent } from './nw-module/commission-list/commission-header/header-time/header-time.component';
import { HeaderPriorityComponent } from './nw-module/commission-list/commission-header/header-priority/header-priority.component';
import { StandardCommissionPriorityChipComponent } from './nw-common/standard-component/standard-commission-priority-chip/standard-commission-priority-chip.component';
import { StandardProgressBarComponent } from './nw-common/standard-component/standard-progress-bar/standard-progress-bar.component';
import { StandardEmptyTextComponent } from './nw-common/standard-component/standard-empty-text/standard-empty-text.component';
import { DashboardComponent } from './nw-module/dashboard/dashboard.component';
import { CommissionArchiveComponent } from './nw-module/commission-archive/commission-archive.component';
import { TemplatesComponent } from './nw-module/templates/templates.component';
import { CustomersComponent } from './nw-module/customers/customers.component';
import { DisplayErrorComponent } from './nw-common/display-error/display-error.component';
import { CommissionTitleComponent } from './nw-module/commission-list/commission-title/commission-title.component';
import { StandardCommissionCustomerChipComponent } from './nw-common/standard-component/standard-commission-customer-chip/standard-commission-customer-chip.component';
import { StandardCommissionCustomerCardComponent } from './nw-common/standard-component/standard-commission-customer-card/standard-commission-customer-card.component';
import { StandardCommissionStatusUpdateMenuComponent } from './nw-common/standard-component/standard-commission-status-update-menu/standard-commission-status-update-menu.component';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    ToolbarComponent,
    CommissionListComponent,
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
    BodyActionComponent,
    BodyCustomerComponent,
    ToolbarListComponent,
    BodyAnnotationComponent,
    BodyResourceComponent,
    BodyRecapComponent,
    BodyMessageComponent,
    StandardCommissionStatusChipComponent,
    StandardSpinnerComponent,
    StandardEmptyComponent,
    HeaderTypeComponent,
    StandardCommissionTypeChipComponent,
    HeaderTimeComponent,
    HeaderPriorityComponent,
    StandardCommissionPriorityChipComponent,
    StandardProgressBarComponent,
    StandardEmptyTextComponent,
    DashboardComponent,
    CommissionArchiveComponent,
    TemplatesComponent,
    CustomersComponent,
    DisplayErrorComponent,
    CommissionTitleComponent,
    StandardCommissionCustomerChipComponent,
    StandardCommissionCustomerCardComponent,
    StandardCommissionStatusUpdateMenuComponent
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
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSlideToggleModule,

    ClipboardModule,

    FontAwesomeModule,

    AngularSplitModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    MatDatepickerModule,
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
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
