import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  HeaderComponent,
  HeaderNavComponent,
  DashboardViewComponent,
  DashboardControlsComponent
} from './shared';

import { WindowRefService } from './shared';

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
    DashboardControlsComponent
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
