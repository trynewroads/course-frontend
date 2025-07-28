import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TaskCard } from '@tnr/features/tasks/components/task-card/task-card';
import { CreateUpdateTask } from '@tnr/features/tasks/dialog/create-update-task/create-update-task';
import { Task } from '@tnr/features/tasks/models/task.model';
import { TasksService } from '@tnr/features/tasks/services/tasks.service';
import { ConfirmDialog } from '@tnr/shared/components/confirm-dialog/confirm-dialog';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  selector: 'app-tasks',
  imports: [ReactiveFormsModule, TaskCard, MatButtonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  readonly #tasksService = inject(TasksService);
  readonly #dialog = inject(MatDialog);

  private updateTasksSignal = signal<number>(0);

  tasksSignal = derivedAsync(() => {
    this.updateTasksSignal();
    return this.#tasksService.getTasks();
  });

  onChangeStatus({ id, status }: Task) {
    this.#tasksService.updateTaskStatus(id, { status: !status }).subscribe();
  }

  onCreate() {
    this.#dialog
      .open(CreateUpdateTask)
      .afterClosed()
      .subscribe((task) => {
        if (task) {
          this.#tasksService.createTask(task).subscribe(() => {
            this.updateTasksSignal.update((value) => value + 1);
          });
        }
      });
  }

  onEdit(task: Task) {
    this.#dialog
      .open(CreateUpdateTask, {
        data: task,
      })
      .afterClosed()
      .subscribe((taskUpdate) => {
        if (taskUpdate) {
          this.#tasksService.updateTask(task.id, taskUpdate).subscribe(() => {
            this.updateTasksSignal.update((value) => value + 1);
          });
        }
      });
  }

  onDelete(task: Task) {
    this.#dialog
      .open(ConfirmDialog, {
        data: {
          title: 'Eliminar Tarea',
          message: `¿Estás seguro de eliminar la tarea "${task.title}"?`,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Eliminar',
        },
      })
      .afterClosed()
      .subscribe((confirm) => {});

    /* this.#tasksService.deleteTask(task.id).subscribe(() => {
      this.updateTasksSignal.update((value) => value + 1);
    }); */
  }
}
