import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Task } from '@tnr/features/tasks/models/task.model';
import { createUpdateTaskToForm } from '@tnr/features/tasks/utils/task-forms';
import { Logo } from '@tnr/shared/components/logo/logo';

@Component({
  selector: 'app-create-update-task',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    Logo,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
  ],
  templateUrl: './create-update-task.html',
  styleUrl: './create-update-task.scss',
})
export class CreateUpdateTask {
  task = inject(MAT_DIALOG_DATA);
  createUpdateTaskForm = createUpdateTaskToForm();
  title = signal<string>('Nueva Tarea');
  buttonText = signal<string>('Crear Tarea');

  constructor() {
    if (this.task) {
      this.onEdit(this.task);
    }
  }

  private onEdit(task: Task) {
    this.createUpdateTaskForm = createUpdateTaskToForm(task);
    this.title.set('Editar Tarea');
    this.buttonText.set('Actualizar Tarea');
  }
}
