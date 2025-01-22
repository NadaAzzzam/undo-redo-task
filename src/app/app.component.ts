import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UndoRedoFormService } from './services/und-redo-form.store.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatSnackBarModule,
        HighlightDirective,
        CommonModule,
        MatToolbarModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup;
  canUndo$: Observable<boolean>;
  canRedo$: Observable<boolean>;
  highlightTrigger: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formService: UndoRedoFormService, // Inject the service,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      notifications: [false],
      role: [''],
    });
    this.canUndo$ = this.formService.canUndo();
    this.canRedo$ = this.formService.canRedo();
  }

  ngOnInit(): void {
    // Subscribe to current form data and set form values
    this.formService.getCurrentFormData().subscribe((formData) => {
      this.form.setValue(formData, { emitEvent: false });
    });

    // Dispatch updates on form value changes
    this.form.valueChanges.subscribe((value) => {
      this.formService.updateUndoRedoForm(value);
    });
  }

  undo() {
    this.formService.performUndo();
    this.triggerHighlight();

    this.showSnackBar('Undo action performed');
  }

  redo() {
    this.formService.performRedo();
    this.triggerHighlight();

    this.showSnackBar('Redo action performed');
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  private triggerHighlight(): void {
    this.highlightTrigger = true;
    setTimeout(() => {
      this.highlightTrigger = false;
    }, 100);
  }
}
