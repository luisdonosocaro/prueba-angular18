import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-one',
    loadChildren: () => import('./components/view-one/view-one.module').then(m => m.ViewOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./components/view-two/view-two.module').then(m => m.ViewTwoModule)
  }
];
