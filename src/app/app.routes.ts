import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Corezan & ZARO | Enterprise AI & Sovereign Cloud Operating Backbone',
  },
  {
    path: 'careers',
    component: CareersComponent,
    title: 'Careers & Systems Engineering | Corezan & ZARO',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Node Unreachable | Corezan & ZARO Mesh',
  },
];
