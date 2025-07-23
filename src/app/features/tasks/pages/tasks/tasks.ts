import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { derivedAsync } from 'ngxtension/derived-async';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  readonly #tasksService = inject(TasksService);
  readonly #fb = inject(FormBuilder);
  private updateTasksSignal = signal<number>(0)

  selectedTask = signal<number | undefined>(undefined);
  removingTaskId?: number;

  tasksSignal = derivedAsync(() => {
      this.updateTasksSignal();
     return this.#tasksService.getTasks()
    });

  createForm: FormGroup = this.#fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  editForm: FormGroup = this.#fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: [false, Validators.required]
  });

  addTask() {
    this.#tasksService.createTask(this.createForm.getRawValue())
    .subscribe(() => {
      this.createForm.reset();
      this.updateTasks();
    });
  }

  deleteTask(id: number) {
    this.#tasksService.deleteTask(id)
      .subscribe(() => {
        this.removingTaskId = undefined;
        this.updateTasks();
      });    
  }

  editTask(task: Task) {
    this.selectedTask.set(task.id);
    this.editForm.patchValue({
      title: task.title,
      description: task.description,
      completed: task.completed
    });
  }

  saveEdit(task: Task) {
    this.#tasksService.updateTask(task.id, this.editForm.getRawValue())
      .subscribe(() => {
        this.selectedTask.set(undefined);
        this.updateTasks();
        this.editForm.reset();
      });
  }

  cancelEdit() {
    this.selectedTask.set(undefined);
    this.editForm.reset();
  }


  private updateTasks() {
    this.updateTasksSignal.update(value => value + 1);
  }
}
