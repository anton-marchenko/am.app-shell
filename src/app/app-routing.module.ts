import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about-page/about-page.routes').then(
        (r) => r.ABOUT_PAGE_ROUTES
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'wmf',
    loadComponent: () => import('mfe1/Component').then((m) => m.AppComponent),
  },
  {
    // List of apps for iframe integration
    // might be configured dynamically in backend.
    // Therefore list of those routes could not be determined in frontend.
    // Therefore we need to handle by mask all those iframe apps routes:
    path: '**',
    loadComponent: () =>
      import('./components/container/container.component').then(
        (c) => c.ContainerComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
