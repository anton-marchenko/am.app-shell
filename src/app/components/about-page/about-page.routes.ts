import { Route } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

export const ABOUT_PAGE_ROUTES: Route[] = [
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./about-user/about-user.component').then(
        (c) => c.AboutUserComponent
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
