import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUpdateTask } from '@tnr/features/tasks/dto/create-task.dto';
import { UpdateTaskStatusForm } from '@tnr/features/tasks/dto/update-task-status.dto';
import { Task } from '@tnr/features/tasks/models/task.model';

export const createUpdateTaskToForm = (task?: Task) => {
  return new FormGroup<CreateUpdateTask>({
    title: new FormControl(task?.title || '', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    description: new FormControl(task?.description || '', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });
};

export const updateTaskStatusForm = (task: Task) => {
  return new FormGroup<UpdateTaskStatusForm>({
    status: new FormControl(task.status, {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });
};
