import { FormType } from '@tnr/core/models/forms';
import { CreateTaskDto } from '@tnr/features/tasks/dto/create-task.dto';
export type UpdateTaskDto = CreateTaskDto;

export type UpdateTaskForm = FormType<UpdateTaskDto>;
