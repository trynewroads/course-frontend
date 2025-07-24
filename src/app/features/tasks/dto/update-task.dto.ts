import { FormType } from '@tnr/core/models/forms';
import { Task } from '@tnr/features/tasks/models/task.model';

export type UpdateTaskDto = Omit<Task, 'id' | 'status'>;


export type UpdateTaskForm = FormType<UpdateTaskDto>;
