import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckComponent } from './check/check.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'check',
    component: CheckComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
