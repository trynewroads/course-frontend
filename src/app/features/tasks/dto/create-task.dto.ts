import { Task } from '../components/task/task';

export type CreateTaskDto = Omit<Task, 'id' | 'complete'>;

