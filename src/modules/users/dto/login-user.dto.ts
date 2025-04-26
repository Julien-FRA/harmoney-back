import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsString({
    message: 'Votre mot de passe doit être une chaine de caractère.',
  })
  password: string;
}
