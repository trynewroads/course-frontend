import { FormType } from '@tnr/core/models/forms';
import { Task } from '@tnr/features/tasks/models/task.model';


export type CreateTaskDto = Omit<Task, 'id' | 'status'>;

export type CreateTaskForm = FormType<CreateTaskDto>;
