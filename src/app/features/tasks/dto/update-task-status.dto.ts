import { FormType } from '@tnr/core/models/forms';

export interface UpdateTaskStatusDto {
  status: boolean;
}

export type UpdateTaskStatusForm = FormType<UpdateTaskStatusDto>;
