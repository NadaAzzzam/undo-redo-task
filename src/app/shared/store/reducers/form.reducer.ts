import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { UndoRedoState } from '../utils/models/form.interface';
import { redo, undo, updateForm } from '../actions/form.actions';

export const undoRedoInitialState: UndoRedoState = {
  formData: {
    email: '',
    name: '',
    notifications: false,
    role: '',
  },
  undoStack: [],
  redoStack: [],
};

export const undoRedoFormStateReducer: ActionReducer<UndoRedoState, Action> =
  createReducer(
    undoRedoInitialState,

    on(updateForm, (state, { formData }) => ({
      ...state,
      undoStack: [...state.undoStack, state.formData], // Push current state to undoStack
      redoStack: [], // Clear redo stack on new update
      formData, // Update form data
    })),

    on(undo, (state) => {
      if (state.undoStack.length === 0) return state;

      const previousFormData = state.undoStack[state.undoStack.length - 1];
      return {
        ...state,
        undoStack: state.undoStack.slice(0, -1),
        redoStack: [state.formData, ...state.redoStack], // Push current form data to redoStack
        formData: previousFormData,
      };
    }),

    on(redo, (state) => {
      if (state.redoStack.length === 0) return state;

      const nextFormData = state.redoStack[0];
      return {
        ...state,
        undoStack: [...state.undoStack, state.formData], // Push current form data to undoStack
        redoStack: state.redoStack.slice(1), // Remove the first item from redoStack
        formData: nextFormData, // Restore the next state
      };
    })
  );
