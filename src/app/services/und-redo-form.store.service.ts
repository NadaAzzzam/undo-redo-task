import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.reducer';
import { selectCanRedo, selectCanUndo, selectCurrentFormData } from '../store/selectors/form.selector';
import { redo, undo,updateForm } from '../store/actions/form.actions';


@Injectable({
  providedIn: 'root'
})
export class UndoRedoFormService {
  constructor(private store: Store<AppState>) {}

  // Method to get the current form data
  getCurrentFormData(): Observable<any> {
    return this.store.select(selectCurrentFormData);
  }

  // Method to check if Undo is possible
  canUndo(): Observable<boolean> {
    return this.store.select(selectCanUndo);
  }

  // Method to check if Redo is possible
  canRedo(): Observable<boolean> {
    return this.store.select(selectCanRedo);
  }

  // Method to update form data
  updateUndoRedoForm(formData: any) {
    this.store.dispatch(updateForm({ formData }));
  }

  // Method to perform Undo action
  performUndo() {
    this.store.dispatch(undo());
  }

  // Method to perform Redo action
  performRedo() {
    this.store.dispatch(redo());
  }
}
