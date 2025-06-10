import { Injectable } from '@nestjs/common';
import { ExpensesRepository } from '../repository/expenses.repository';
import { UsersService } from 'src/modules/users/services/users.service';
import { HouseholdService } from 'src/modules/household/services/household.service';
import { CreateExpensesDto } from '../dto/create-expenses.dto';

@Injectable()
export class ExpensesService {
  constructor(
    private readonly expensesRepository: ExpensesRepository,
    private readonly usersService: UsersService,
    private readonly householdService: HouseholdService,
  ) {}

  async createExpense(expenses: CreateExpensesDto) {
    const { userId, householdId } = expenses;
    await this.verifyExistingUserAndHouseHold(userId, householdId);

    return this.expensesRepository.createExpenses(expenses);
  }

  async findById(id: string) {
    return this.expensesRepository.findById(id);
  }

  async findAll() {
    return this.expensesRepository.findAll();
  }

  private async verifyExistingUserAndHouseHold(
    userId: string,
    householdId: string,
  ) {
    if (!userId || !householdId) {
      throw new Error('User ID and Household ID are required');
    }

    const existingUser = await this.usersService.findById(userId);
    if (!existingUser) {
      throw new Error(`User with ID ${userId} does not exist`);
    }

    const existingHousehold = await this.householdService.findById(householdId);
    if (!existingHousehold) {
      throw new Error(`Household with ID ${householdId} does not exist`);
    }
  }
}
