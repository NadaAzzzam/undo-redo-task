// history.routes.ts
import { Routes } from '@angular/router';
import { listResolverResolver } from './resolvers/list-resolver.resolver';

export const HISTORY_ROUTES: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./components/history-list/history-list.component').then(
        (c) => c.HistoryListComponent
      ),
    resolve: { historyData: listResolverResolver },
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/history-form/history-form.component').then(
        (c) => c.HistoryFormComponent
      ),
  },
];
