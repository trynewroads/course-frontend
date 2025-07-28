import { FormType } from '@tnr/core/models/forms';
import { UpdateTaskForm } from '@tnr/features/tasks/dto/update-task.dto';
import { Task } from '@tnr/features/tasks/models/task.model';

export type CreateTaskDto = Omit<Task, 'id' | 'status'>;

export type CreateTaskForm = FormType<CreateTaskDto>;

export type CreateUpdateTask = CreateTaskForm | UpdateTaskForm;
