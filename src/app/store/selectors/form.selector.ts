import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

// Select the form state
export const selectUndoRedoFormState = (state: AppState) => state.undoRedoForm;

// Select the current form data
export const selectCurrentFormData = createSelector(
  selectUndoRedoFormState,
  (state) => state.formData
);

// Select if Undo is possible
export const selectCanUndo = createSelector(
  selectUndoRedoFormState,
  (state) => state.undoStack.length > 0
);

// Select if Redo is possible
export const selectCanRedo = createSelector(
  selectUndoRedoFormState,
  (state) => state.redoStack.length > 0
);
