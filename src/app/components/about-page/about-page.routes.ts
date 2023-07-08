import { Route } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

export const ABOUT_PAGE_ROUTES: Route[] = [
  {
    path: '**',
    component: AboutPageComponent,
    // loadComponent: () =>
    //   import('./testo.component').then((c) => c.TestoComponent),
  },
];
