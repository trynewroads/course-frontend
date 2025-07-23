import { LoginDto } from '../dto/login.dto';

export type User = Pick<LoginDto, 'username'>;