import { IsString } from 'class-validator';

export class CreateHouseholdMembersDto {
  @IsString({ message: 'Le rôle du membre du foyer est requis.' })
  role: string;

  @IsString({ message: "L'ID du user est requis." })
  userId: string;

  @IsString({ message: "L'ID du foyer est requis." })
  householdId: string;
}
