import { Task } from '../components/task/task';

export type UpdateTaskDto = Omit<Task, 'id'>;