import { IsString } from 'class-validator';

export class CreateHouseholdDto {
  @IsString({ message: 'Votre name est incorrect.' })
  name: string;
}
