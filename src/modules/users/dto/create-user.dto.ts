import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString({ message: 'Votre nom doit être une chaine de caractère.' })
  @MinLength(3, { message: 'Votre nom doit faire au moins 3 caractères.' })
  @MaxLength(20, { message: 'Votre nom doit faire au maximum 20 caractères.' })
  name: string;

  @IsString({
    message: 'Votre mot de passe doit être une chaine de caractère.',
  })
  @MinLength(3, {
    message: 'Votre mot de passe doit faire au moins 3 caractères.',
  })
  password: string;
}
