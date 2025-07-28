import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TaskCard } from '@tnr/features/tasks/components/task-card/task-card';
import { CreateTask } from '@tnr/features/tasks/dialog/create-task/create-task';
import { Task } from '@tnr/features/tasks/models/task.model';
import { TasksService } from '@tnr/features/tasks/services/tasks.service';
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
      .open(CreateTask)
      .afterClosed()
      .subscribe((task) => {
        if (task) {
          this.#tasksService.createTask(task).subscribe(() => {
            this.updateTasksSignal.update((value) => value + 1);
          });
        }
      });
  }

  onEdit(task: Task) {}

  onDelete(task: Task) {
    this.#tasksService.deleteTask(task.id).subscribe(() => {
      this.updateTasksSignal.update((value) => value + 1);
    });
  }
}
