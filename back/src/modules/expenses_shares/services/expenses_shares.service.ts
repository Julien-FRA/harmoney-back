import { Injectable } from '@nestjs/common';
import { ExpensesService } from 'src/modules/expenses/services/expenses.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { ExpensesSharesRepository } from '../repository/expenses_shares.repository';
import { CreateExpensesSharesDto } from '../dto/create-expenses_shares.dto';

@Injectable()
export class ExpensesSharesService {
  constructor(
    private readonly expensesSharesRepository: ExpensesSharesRepository,
    private readonly expensesService: ExpensesService,
    private readonly usersSerivce: UsersService,
  ) {}

  async createExpensesShare(expenseShareData: CreateExpensesSharesDto) {
    const { expenseId, userId } = expenseShareData;
    await this.verifyExistingExpensesAndUsers(expenseId, userId);

    if (!expenseShareData.amount) {
      throw new Error('Amount is required');
    }

    if (expenseShareData.amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }

    return this.expensesSharesRepository.createExpenseShare(expenseShareData);
  }

  async findById(id: string) {
    return this.expensesSharesRepository.findById(id);
  }

  async findAll() {
    return this.expensesSharesRepository.findAll();
  }

  private async verifyExistingExpensesAndUsers(
    expenseId: string,
    userId: string,
  ) {
    if (!expenseId || !userId) {
      throw new Error('Expense ID and User ID are required');
    }

    const expense = await this.expensesService.findById(expenseId);
    if (!expense) {
      throw new Error(`Expense with ID ${expenseId} does not exist`);
    }

    const user = await this.usersSerivce.findById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} does not exist`);
    }
  }
}
