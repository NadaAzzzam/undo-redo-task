import { createAction, props } from '@ngrx/store';

const UNDO_REDO_FORM_PREFIX = '[UNDO_REDO_FORM]';

const UPDATE_UNDO_REDO_FORM_PREFIX = `${UNDO_REDO_FORM_PREFIX} UPDATE_UNDO_REDO_FORM`;
const UNDO_PREFIX = `${UNDO_REDO_FORM_PREFIX} UNDO`;
const REDO_PREFIX = `${UNDO_REDO_FORM_PREFIX} REDO`;


export const updateForm = createAction(UPDATE_UNDO_REDO_FORM_PREFIX, props<{ formData: any }>());
export const undo = createAction(UNDO_PREFIX);
export const redo = createAction(REDO_PREFIX);
