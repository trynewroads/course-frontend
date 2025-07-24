import { FormType } from '@tnr/core/models/forms';

export interface LoginDto {
  username: string;
  password: string;
}

export type LoginForm = FormType<LoginDto>;
