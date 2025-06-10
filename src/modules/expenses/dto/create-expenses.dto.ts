import { IsNumber, IsString } from 'class-validator';

export class CreateExpensesDto {
  @IsString({ message: 'Le titre de la dépense est requis.' })
  title: string;

  @IsNumber({}, { message: 'Le montant de la dépense doit être un nombre.' })
  amount: number;

  @IsString({ message: "L'ID du user est requis." })
  userId: string;

  @IsString({ message: "L'ID du foyer est requis." })
  householdId: string;
}
