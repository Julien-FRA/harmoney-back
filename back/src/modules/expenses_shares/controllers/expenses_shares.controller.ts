import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpensesSharesService } from '../services/expenses_shares.service';
import { CreateExpensesSharesDto } from '../dto/create-expenses_shares.dto';

@Controller('expenses-shares')
export class ExpensesSharesController {
  constructor(private readonly expensesSharesService: ExpensesSharesService) {}

  @Post('create')
  createExpensesShare(@Body() createExpenseShareDto: CreateExpensesSharesDto) {
    return this.expensesSharesService.createExpensesShare(
      createExpenseShareDto,
    );
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.expensesSharesService.findById(id);
  }

  @Get()
  findAll() {
    return this.expensesSharesService.findAll();
  }
}
