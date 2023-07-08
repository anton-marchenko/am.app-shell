import { Route } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

export const ABOUT_PAGE_ROUTES: Route[] = [
  {
    path: 'company',
    loadComponent: () =>
      import('./about-company/about-company.component').then(
        (c) => c.AboutCompanyComponent
      ),
  },
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];
