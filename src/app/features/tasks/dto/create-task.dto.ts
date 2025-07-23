import { FormType } from '../../../core/models/forms';
import { Task } from '../components/task/task';

export type CreateTaskDto = Omit<Task, 'id' | 'complete'>;

export type CreateTaskForm = FormType<CreateTaskDto>;
