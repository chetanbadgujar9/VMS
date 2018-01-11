import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// PrimeNg Modules
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

// Sidebar Component
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Navbar Component
import { NavbarComponent } from './shared/navbar/navbar.component';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
