import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TaskCard } from '@tnr/features/tasks/components/task-card/task-card';
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

  private updateTasksSignal = signal<number>(0);

  tasksSignal = derivedAsync(() => {
    this.updateTasksSignal();
    return this.#tasksService.getTasks();
  });

  onChangeStatus({ id, status }: Task) {
    this.#tasksService.updateTaskStatus(id, { status: !status }).subscribe();
  }

  onEdit(task: Task) {}

  onDelete(task: Task) {
    this.#tasksService.deleteTask(task.id).subscribe(() => {
      this.updateTasksSignal.update((value) => value + 1);
    });
  }
}
