import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Corezan' },
  { path: 'careers', component: CareersComponent, title: 'Careers | Corezan' },
  { path: '**', redirectTo: '' },
];
