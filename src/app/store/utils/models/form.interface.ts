export interface UndoRedoState {
  formData: any;                // Current form data
  undoStack: any[];             // Stack for Undo
  redoStack: any[];             // Stack for Redo
}
