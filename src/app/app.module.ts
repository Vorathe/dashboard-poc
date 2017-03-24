import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';

const config = require('../config');

import {
  HeaderComponent,
  HeaderNavComponent,
  DashboardViewComponent,
  DashboardControlsComponent,
  SearchComponent,
  SearchTrayComponent,
  NotificationsComponent,
  NotifyTrayComponent,
  CreditAppComponent,
  SideNavComponent,
  StickyScrollerDirective
} from './shared/ui';

import {
  WindowRefService,
  CreditAppStateService,
  LoginService
} from './shared/services';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [ Http ]
      }
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    DashboardComponent,
    DashboardViewComponent,
    DashboardControlsComponent,
    LoginComponent,
    SearchComponent,
    SearchTrayComponent,
    NotificationsComponent,
    NotifyTrayComponent,
    CreditAppComponent,
    SideNavComponent,
    StickyScrollerDirective
  ],
  entryComponents: [ HeaderComponent ],
  providers: [
    WindowRefService,
    CreditAppStateService,
    LoginService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {}
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, config.i18n.path, '.json');
}
