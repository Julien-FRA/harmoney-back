import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExpensesDto } from '../dto/create-expenses.dto';

@Injectable()
export class ExpensesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createExpenses(expenseData: CreateExpensesDto) {
    const { title, amount, userId, householdId } = expenseData;
    return this.prisma.expense.create({
      data: {
        title,
        amount,
        author: { connect: { id: userId } },
        household: { connect: { id: householdId } },
      },
    });
  }

  async findById(id: string) {
    return this.prisma.expense.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<any[]> {
    return this.prisma.expense.findMany();
  }
}
