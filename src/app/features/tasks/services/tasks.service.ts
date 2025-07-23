import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../models/task.model';



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

  deleteTask(id: number) {
    return this.#http.delete<void>(`${this.#slug}/${id}`);
  }
}
