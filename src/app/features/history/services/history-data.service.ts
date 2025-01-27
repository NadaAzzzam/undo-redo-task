import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryDataService {

  constructor() { }
  getItems(): Observable<{ items: any[] }> {
    const mockData = { items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] };
    return of(mockData).pipe(delay(1000)); // Simulate delay
  }
}
