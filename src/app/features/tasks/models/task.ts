export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type CreateTaskDto = Omit<Task, 'id' | 'complete'>;

export type UpdateTaskDto = Omit<Task, 'id'>;