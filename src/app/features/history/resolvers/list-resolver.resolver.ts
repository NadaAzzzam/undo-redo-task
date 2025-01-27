import { inject } from '@angular/core';
import { ResolveFn, Router, UrlTree } from '@angular/router';
import { HistoryDataService } from '../services/history-data.service';
import { map } from 'rxjs';

export const listResolverResolver: ResolveFn<{ items: any[] } | UrlTree> = (route, state) => {
  // Inject the service to fetch data
  const historyDataService = inject(HistoryDataService);
  const router = inject(Router);


  // Return the data (Observable, Promise, or raw value)
  return historyDataService.getItems().pipe(
    map((data) => {
      // Check if data is empty
      if (!data || data.items.length === 0) {
        // Redirect to a different route (e.g., `/error` or `/home`)
        return router.createUrlTree(['/no-data']);
      }
      // Proceed with navigation and pass data to the component
      return data;
    })
  );
};
