import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
