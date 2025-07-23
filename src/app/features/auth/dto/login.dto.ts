import { FormType } from '../../../core/models/forms';

export interface LoginDto {
  username: string;
  password: string;
}

export type LoginForm = FormType<LoginDto>;
