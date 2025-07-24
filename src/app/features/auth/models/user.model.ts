import { LoginDto } from '@tnr/features/auth/dto/login.dto';


export type User = Pick<LoginDto, 'username'>;