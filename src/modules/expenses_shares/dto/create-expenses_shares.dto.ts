import { IsNumber, IsString } from 'class-validator';

export class CreateExpensesSharesDto {
  @IsString({ message: "L'ID de la dépense est requis." })
  expenseId: string;

  @IsString({ message: "L'ID de l'utilisateur est requis." })
  userId: string;

  @IsNumber({}, { message: 'Le montant de la part doit être un nombre.' })
  amount: number;
}
