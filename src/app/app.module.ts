import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckComponent } from './check/check.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
