import { Route } from '@angular/router';
import { APP_ROUTES } from './app.model';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: APP_ROUTES.VESSELS,
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('@navtor/vessels').then(({ VesselsModule: VesselsModule }) => VesselsModule),
  },
];
