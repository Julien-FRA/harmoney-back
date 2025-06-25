import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExpensesSharesDto } from '../dto/create-expenses_shares.dto';

@Injectable()
export class ExpensesSharesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createExpenseShare(expenseShareData: CreateExpensesSharesDto) {
    const { expenseId, userId, amount } = expenseShareData;
    return this.prisma.expenseShare.create({
      data: {
        expense: { connect: { id: expenseId } },
        user: { connect: { id: userId } },
        amount,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.expenseShare.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<any[]> {
    return this.prisma.expenseShare.findMany();
  }
}
