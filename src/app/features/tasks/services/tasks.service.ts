import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateTaskDto } from '@tnr/features/tasks/dto/create-task.dto';
import { UpdateTaskStatusDto } from '@tnr/features/tasks/dto/update-task-status.dto';
import { UpdateTaskDto } from '@tnr/features/tasks/dto/update-task.dto';
import { Task } from '@tnr/features/tasks/models/task.model';



@Injectable({
  providedIn: 'root'
})
export class TasksService {
  readonly #http = inject(HttpClient);
  readonly #slug = 'api/tasks';


  getTasks() {
    return this.#http.get<Task[]>(`${this.#slug}`);
  }

  getTask(id: number) {
    return this.#http.get<Task>(`${this.#slug}/${id}`);
  }

  createTask(createTask: CreateTaskDto) {
    return this.#http.post<Task>(`${this.#slug}`, createTask);
  }

  updateTask(id: number, updateTask: UpdateTaskDto) {
    return this.#http.put<Task>(`${this.#slug}/${id}`, updateTask);
  }

  updateTaskStatus(id: number, updateTaskStatus: UpdateTaskStatusDto) {
    return this.#http.patch<Task>(`${this.#slug}/${id}/status`, updateTaskStatus);
  }

  deleteTask(id: number) {
    return this.#http.delete<void>(`${this.#slug}/${id}`);
  }
}
