import { FormType } from '../../../core/models/forms';
import { Task } from '../models/task.model';

export type UpdateTaskDto = Omit<Task, 'id'>;


export type UpdateTaskForm = FormType<UpdateTaskDto>;
