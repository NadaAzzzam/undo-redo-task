import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as sharedState from './index';
import { UNDO_REDO_STORE } from './utils/consts/store-name.const';
import { undoRedoFormStateReducer } from './reducers/form.reducer';


// Initialize the App State
export interface AppState {
  [UNDO_REDO_STORE]: sharedState.UndoRedoState;

}

export const reducers: ActionReducerMap<AppState> = {
  [UNDO_REDO_STORE]: undoRedoFormStateReducer,
  // Add future reducers here
};

// Initialize the metaReducers
export const metaReducers: MetaReducer<AppState>[] =  [];
