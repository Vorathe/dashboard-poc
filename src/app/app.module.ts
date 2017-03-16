import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  HeaderComponent,
  HeaderNavComponent,
  DashboardViewComponent,
  DashboardControlsComponent,
  SearchComponent,
  SearchTrayComponent,
  NotificationsComponent,
  NotifyTrayComponent,
  CreditAppComponent
} from './shared/ui';

import {
  WindowRefService,
  CreditAppStateService
} from './shared/services';

import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    DashboardComponent,
    DashboardViewComponent,
    DashboardControlsComponent,
    SearchComponent,
    SearchTrayComponent,
    NotificationsComponent,
    NotifyTrayComponent,
    CreditAppComponent
  ],
  providers: [
    WindowRefService,
    CreditAppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
